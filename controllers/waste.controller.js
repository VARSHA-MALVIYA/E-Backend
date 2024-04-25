import mongoose from "mongoose";
import Waste from '../models/waste.model.js'
import PreciousMetal from "../models/preciousMetal.model.js";

export const getEwastesCategory = async(req,res) => {
    try {
        // sare ewastes leke aao db me se
        const allEwastes = await Waste.find({}) ;

        // ek array me unki category store kara lo
        // ye array me duplicate categories bhi ho skti he
        let categoryWithDuplicates = [];
        allEwastes.map((waste)=>{
            categoryWithDuplicates.push(waste.category);
        })

        // making unique array of category
        var uniqueCategoriesSet = new Set(categoryWithDuplicates);
        // Convert the Set back to an array
        var uniqueCategories = Array.from(uniqueCategoriesSet);

        // vo arrray return kar do response me
        return res.status(200).json({
            success:true,
            message:"Data fetched successfully.",
            uniqueCategories:uniqueCategories,
        })
        
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"Some error occured in getEwastesCategory controller."
        })
    }
}

export const getSelectedCategoryWasteInfo = async(req,res) => {
    try {

        const {category} = req.body ;

        

        console.log(category);

        const categoryWasteInfo = await Waste.find({category:category});


        let selectedCategoryNames = [];
        categoryWasteInfo.map((waste)=>{
            selectedCategoryNames.push(waste.name);
        })

        console.log(selectedCategoryNames);

        return res.status(200).json({
            success:true,
            data : selectedCategoryNames,
        });
        
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"Some error occured in getSelectedCategoryWasteInfo controller."
        })
    }
}

export const getDeviceDetailsById = async(req,res) => {
    try {

        const {wasteId} = req.body ;

        const realWasteId = new mongoose.Types.ObjectId(wasteId);

        const waste = await Waste.findById(realWasteId).populate("preciousMetals") ;

        if(!waste)
        {
            return res.status(500).json({
                success:false,
                message:"Waste Not found in getDeviceDetailsById backend ",
            })
        }

        return res.status(200).json({
            success:true,
            message:"Waste Found.",
            waste:waste,
        })

        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"error in getDeviceDetailsById controller",
        })
    }
}

export const getDeviceDetails = async(req,res) => {

    try {

        const {category,device} = req.body ;

        const deviceDetails = await Waste.findOne({category:category,name:device})
                                            .populate("preciousMetals");

        if(!deviceDetails)
        {
            return res.status(500).json({
                success:false,
                message:"Device not found",
            })
        }

        console.log("deviceDetails : ",deviceDetails)

        return res.status(200).json({
            success:true,
            message:"Device details",
            device:deviceDetails,
        })

        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"error in getDeviceDetails controller",
        })
    }
}

export const getAllDevices = async(req,res) => {
    try {
        const allDevices = await Waste.find({}).populate("preciousMetals")
        return res.status(200).json(allDevices)
    } catch (error) {
        console.log(error.message)
    }
}

export const updateDeviceInfo = async(req,res) => {
    try {
        const {name,category,preciousMetals,modelNumber,greenPoints,_id} = req.body;
        const id = new mongoose.Types.ObjectId(_id);

        const updatedDevice = await Waste.findByIdAndUpdate(
            {_id:id},
            { $set : {
                name:name,
                category:category,
                modelNumber:modelNumber,
                greenPoints:greenPoints,
            } },
            {new:true}
        )

        for(const metal of preciousMetals)
        {
            await PreciousMetal.findByIdAndUpdate(
                {_id:metal._id},
                { $set : { name:metal.name , weight:metal.weight } },
                {new:true}
            )
        }

        return res.status(200).json({
            success:true,
            message:"Updated data successfully",
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something went wrong in updateDeviceInfo",
            error:error.message
        })
    }
}

