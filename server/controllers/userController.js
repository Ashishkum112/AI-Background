// API controller function to manage Clerk User with database

//http://localhost:8000/api/user/webhooks

import { Webhook } from "svix"
import userModel from "../models/userModel.js"
import razorpay from 'razorpay'
import transactionModel from "../models/transactionModel.js";
import dotenv from "dotenv"
dotenv.config()

const clerkWebhooks = async (req, res) => {
    try {
        console.log("Webhook triggered"); // Debug line

        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        await whook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        });

        const { data, type } = req.body;
        console.log("Webhook event type:", type); // Debug line

        switch (type) {
            case "user.created":{
                console.log("Creating new user"); // Debug line
                const userData = {
                    clerkId: data.id,
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                };
                await userModel.create(userData);
                res.json({});
                break;
            }

            case "user.updated":{
                console.log("Updating user"); // Debug line
                const userData = {
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                };
                await userModel.findOneAndUpdate({ clerkId: data.id }, userData);
                res.json({});
                break;
            }

            case "user.deleted":{
                console.log("Deleting user"); // Debug line
                await userModel.findOneAndDelete({ clerkId: data.id });
                res.json({});
                break;
            }

            default:
                res.json({});
                break;
        }
    } catch (error) {
        console.error("Webhook error:", error.message);
        res.status(500).json({ success: false, message: error.message });
    }
};




//API CONTROLLER fucntion to get user available credits data


const userCredits = async (req, res) => {
    try {
        const { clerkId } = req.body;

        // Find user by clerkId
        const userData = await userModel.findOne({ clerkId });

        if (!userData) {
            // User not found in the database
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Use creditBalance or default to 0 if it is undefined
        const credits = userData.creditBalance ?? 0;

        res.json({ success: true, credits });
    } catch (error) {
        console.error(error.message);
        res.json({ success: false, message: error.message });
    }
};

// Gateway initialise

const razorpayInstance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  })
  


  // API to make payment for credits
  
  const paymentRazorpay = async (req, res) => {
    try {

        const {clerkId,planId} = req.body;

        if (!clerkId || !planId) {
            return res.json({ success: false, message: "Invalid Credentials" });
          }

        const userData = await userModel.findOne({clerkId});

        if(!userData || !planId){
            return res.json({success:false,message:"Invalid Credentials"})
        }

        let credits , plan , amount , date 

        switch (planId) {
            case "Basic":
                plan = 'Basic'
                credits = 100
                amount = 10    
                break;
            case "Advanced":
                plan = 'Advanced'
                credits = 500
                amount = 50    
                break;
            case "Business":
                plan = 'Business'
                credits = 2000
                amount = 250    
                break;
        
            default:
                
                break;
        }

        data = Date.now();

        //Creating Transaction

        const transactionData = {
            clerkId,
            plan,
            amount,
            credits,
            date:Date.now(),
        }

        const newTransaction = await transactionModel.create(transactionData);

        const options = {
        amount : amount * 100,
        currency:process.env.RAZORPAY_CURRENCY,
        receipt:newTransaction._id,
        }

        await razorpayInstance.orders.create(options,(error,order)=>{
            if(error){
                return res.json({success:false,message:"Payment Failed"})
            }
            res.json({success:true,order})
        })
    } catch (error) {
        console.log(error.message);
        res.json({success:false,message:error.message})
        
    }
}

// API controller function to verify the razorpay payment 

const verifyRazorpay = async (req,res) =>{
    try {
        
        const { razorpay_order_id } = req.body
        const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)
        if(orderInfo.status === 'paid'){
            const transactionData = await transactionModel.findById(orderInfo.receipt)
            if(transactionData.payment){
                return res.json({success:false,message:"Payment failed"})
            }

            // Adding Credits in user data
            const userData = await userModel.findOne({clerkId:transactionData.clerkId})
            const creditBalance = userData.creditBalance + transactionData.credits
            await userModel.findByIdAndUpdate(userData._id,{creditBalance})

            // Making the payment true 

            await transactionModel.findByIdAndUpdate(transactionData._id,{payment:true})

            res.json({success:true,message:"Credits Added Successfully"})

        }


    } catch (error) {
        console.log(error.message);
        res.json({success:false,message:error.message})
    }
}



export { clerkWebhooks, userCredits, paymentRazorpay,verifyRazorpay }