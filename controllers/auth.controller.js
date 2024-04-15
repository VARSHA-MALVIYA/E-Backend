import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import { configDotenv } from 'dotenv';

configDotenv();

export const signupHandler = async(req,res) => {
        
    try {
        const {Email, Password, Name, Username} = req.body ;
        
        // some validations
        if(!Email || !Password || !Name || !Username)
        {
            return res.status(500).json({
                success:false,
                message:"Please fill all details correctly",
            })
        }

        // checking if user already exits or not
        const user = await User.findOne({Email}) ;
        if(user)
        {
            return res.status(500).json({
                success:false,
                message:"User already registered",
            })
        }

        // encrypting user password ;
        const hashedPassword = await bcrypt.hash(Password,10);

        const savedUser = await User.create({
            Email:Email,
            Name:Name,
            Username:Username,
            Password:hashedPassword,
        });

        return res.status(200).json({
            success:true,
            message:"Signup Successfull",
            user:savedUser
        })

    } catch (error) {
        return res.status(403).json({
                success:false,
                message:"Some error in signupHandler",
                error : error.message,
        })
    }
}

export const loginHandler = async(req,res) => {

    try {
        const {Email,Password} = req.body ;

        const user = await User.findOne({ Email });

        // checking if user exits or not
        if(!user)
        {
            return res.status(500).json({
                success:false,
                message:"User does not exit",
            })
        }

        const isPasswordMatched = await bcrypt.compare(Password,user.Password);

        // checking password is correct or not
        if(!isPasswordMatched)
        {
            return res.status(402).json({
                success:false,
                message:"Email or Password doesnt matched",
            })
        }

        const token =  jwt.sign({ userId: user._id  }, process.env.JWT_SECRET_KEY);

        // const cookieOption = {
        //     maxAge: (24*60*60*1000) * 3 ,
        //     httpOnly:false,
        // }

        const cookieOptions = {
            secure: false,    // Cookie will only be sent over HTTPS
            httpOnly: false,  // Cookie cannot be accessed by client-side JavaScript
            // sameSite: "None", // Allows the cookie to be sent in cross-origin requests
            path: "/"        // Cookie will be accessible to all paths on the domain
        };

        res.cookie('token',token,cookieOptions);
        // res.cookie('name',"vijayrathore2003",cookieOption);
        console.log("this is cookie....")
        
        return res.status(200).json({
            success:true,
            message:"Login Successfull",
            user:user,
            token:token,
        });

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Some error in loginHandler",
            error : error.message
        })
        
    }
}

export const logoutHandler = async(req,res) => {
    try {
        return res.clearCookie("token").json({
            success:true,
            message:"Cookie cleared Successfully."
        }) ;
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Some error in logoutHandler",
        })
    }
}