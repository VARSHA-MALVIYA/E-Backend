import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    Name : {
        type:String,
        required:true,
        trim:true,
    },

    Username : {
        type:String,
        required:true,
    },

    Email : {
        type:String,
        required:true,
        trim:true,
        unique:true,
    },

    Password : {
        type:String,
        required:true,
    },

    Wastes : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Waste",
        }
    ],

    Role : {
        type : String,
        required:true,
        enum : ["Normal","Operator","Admin"],
    },

    Approved : {
        type:Boolean,
        default:false,
    },

    Appointments : [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Appointment"
        }
    ],

    
},{timestamps:true}) ;

const User =  mongoose.model("User",userSchema);
export default User ;
