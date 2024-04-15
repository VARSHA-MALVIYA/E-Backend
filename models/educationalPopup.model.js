import mongoose from "mongoose";

const educationalPopupSchema = new mongoose.Schema({

   description:{
    type:String,
   },

   title:{
    type:String,
    required:true,
   },


}) ;

const EducationalPopup = mongoose.model("EducationalPopup",educationalPopupSchema);
export default EducationalPopup