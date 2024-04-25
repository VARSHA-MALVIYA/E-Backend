import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    Name : {
        type:String,
        required:true,
        trim:true,
    },

    Username : {
        type:String,
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

    GreenPoints : {
        type:Number,
        default:0,
    },


    Order:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Order"
        }
    ]
 
},{timestamps:true}) ;

const User =  mongoose.model("User",userSchema);
export default User ;
