import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

   User:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true,
   },

   Product:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product",
    required:true,
   },

   Status:{
    type:String,
    required:true,
    enum:["Booked","Delivered"]
   },

   Name:{
      type:String,
      required:true,
      trim:true
   },

   Email:{
      type:String,
      required:true,
   },

   Address:{
      type:String,
      required:true,
   },

   City:{
      type:String,
      required:true,
   },

   Zipcode:{
      type:Number,
      required:true,
   },

},{timestamps:true}) ;


const Order = mongoose.model("Order",orderSchema);
export default Order