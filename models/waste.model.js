import mongoose from "mongoose";

const wasteSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },

    category:{
        type:String,
        required:true,
    },

    preciousMetals:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"PreciousMetal",
        }
    ],

    modelNumber:{
        type:String,
        required:true,
    },
    
    greenPoints:{
        type:Number,
        required:true,
        default:0,
    }
    
}) ;

const Waste = mongoose.model("Waste",wasteSchema);
export default Waste


