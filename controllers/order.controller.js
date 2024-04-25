import mongoose from "mongoose";
import Order from "../models/order.model.js";
import User from "../models/user.model.js";
import Product from "../models/products.model.js";
import { OrderBookedTemplate } from "../MailTemplates/orderBooked.template.js";
import { sendEmail } from "../utils/mailSender.js";


export const makeOrder = async(req,res) => {
    try {
        const {productId,name,email,address,city,zipcode} = req.body ;
        const userId = req.userId ;

        if(!productId || !name || !email || !address || !city || !zipcode || !userId) {
            return res.status(500).json({
                success:false,
                message:'Fill all details correctly in makeOrder backend',
            })
        }

        const realProductId = new mongoose.Types.ObjectId(productId);

        const product = await Product.findById(realProductId);
        const user = await User.findById(userId);

        if(!product || !user)
        {
            return res.status(500).json({
                success:false,
                message:'Product or User not found in makeOrder backend',
            })
        }
        
        if( product?.GreenPoints > user?.GreenPoints )
        {
            return res.status(500).json({
                success:false,
                message:'Do not have enough GreenPoints',
            })
        }

        const orderMaked = await Order.create({
            User:userId,
            Product:realProductId,
            Status:"Booked",
            Email:email,
            Name:name,
            Address:address,
            City:city,
            Zipcode:zipcode
        })

        const newGreenPoints = user?.GreenPoints - product?.GreenPoints ;
        const updatedUser = await User.findByIdAndUpdate(
            {_id:userId},
            {
                $push : { Order:realProductId },
                $set : {GreenPoints:newGreenPoints}
            },
            {new:true}
        )

        const mailHTML = OrderBookedTemplate(product.Name,1,product?.GreenPoints) ;
        sendEmail(updatedUser.Email,"EcoGeeks","Order Confirmation",mailHTML);

        return res.status(200).json({
            success:true,
            message:"Order Booked Successfully",
            order:orderMaked,
            updatedUser:updatedUser,
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Some error in makeOrder handler backend',
            error:error.message,
        })
    }
}

export const getOrderByUserId = async(req,res) => {
    try {
        const userId = req.userId ;
        const allOrders = await Order.find({User:userId}).populate("Product") ;

        return res.status(200).json(allOrders);
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Some error in getOrderByUserId handler backend',
            error:error.message,
        })
    }
}