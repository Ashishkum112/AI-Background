// API controller function to manage Clerk User with database

//http://localhost:8000/api/user/webhooks

import { Webhook } from "svix"
import userModel from "../models/userModel.js"

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


export {clerkWebhooks}