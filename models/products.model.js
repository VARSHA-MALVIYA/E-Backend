import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

   Name:{
    type:String,
    trim:true,
    required:true,
   },

   GreenPoints:{
    type:Number,
    default:0,
    required:true
   },

   Image:{
    type:String,
    required:true,
   }

},{timestamps:true}) ;


const Product = mongoose.model("Product",productSchema);
export default Product