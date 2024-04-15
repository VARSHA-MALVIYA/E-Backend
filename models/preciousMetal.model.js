import mongoose from "mongoose";

const preciousMetalsSchema = new mongoose.Schema({

   name:{type:String, required:true, trim:true,},
   weight:{type:Number, required:true,}

},{timestamps:true}) ;


const PreciousMetal = mongoose.model("PreciousMetal",preciousMetalsSchema);
export default PreciousMetal