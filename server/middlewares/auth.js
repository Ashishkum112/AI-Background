import jwt from "jsonwebtoken"

// Middleware Function to decode jwt token to get clerkID

const authUser = async (req,res,next)=>{
    try {
        const {token} = req.headers

        if(!token)
        {
            return res.json({success:false,message:"Not Authorised Login Again"})
        }

        const token_decode = jwt.decode(token);
if (!token_decode || !token_decode.clerkId) {
    return res.status(401).json({ success: false, message: "Invalid Token. Authorization failed." });
}
req.body.clerkId = token_decode.clerkId;
next();



    } catch (error) {
        console.error("Webhook error:", error.message);
        res.status(500).json({ success: false, message: error.message });
       
    }
}

export default authUser