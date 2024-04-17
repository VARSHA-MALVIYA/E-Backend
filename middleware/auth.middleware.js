
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';


export const addUserToReq = async(req,res,next) => {
    try {

        const token = req.body?.token || 
                      req.cookies?.token ||
                      req.headers['authorization']?.split(' ')[1] ;
        

        // If no token is found
        if (!token) {
            return res.status(500).json({ message: 'Token not found in addUserToReq' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        
        const userId = new mongoose.Types.ObjectId(decoded.userId);

        req.userId = userId;

        console.log("got this userId in middleware -> ",userId)
    
        next();
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Some error in addUserToReq",
            error:error.message
    })
    }
}
