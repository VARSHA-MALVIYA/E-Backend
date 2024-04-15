import mongoose from "mongoose";
import Waste from '../models/waste.model.js'

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

