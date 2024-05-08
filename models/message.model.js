import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({

    firstName:{
     type:String,
     trim:true,
    },

    lastName:{
     type:String,
     trim:true,
    },

   email:{
    type:String,
    required:true,
   },

   message:{
    type:String,
    required:true,
   }

},{timestamps:true}) ;

const Message =  mongoose.model("Message",messageSchema);
export default Message