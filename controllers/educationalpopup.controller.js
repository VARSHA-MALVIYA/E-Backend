import mongoose from 'mongoose';
import EducationalPopup  from '../models/educationalPopup.model.js';

export const addEducationalPopup = async(req,res) => {
    try {
        
        const {title , description} = req.body ;

        if(!title || !description)
        {
            return res.status(500).json({
                success:false,
                message:"All information not found in addEducationalPopup backend",
            })
        }

        const popup = await EducationalPopup.create({
            title:title,
            description:description
        });

        return res.status(200).json({
            success:true,
            message:"Popup Added Successfully" ,
            popup:popup,
        })
        

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something went wrong in addEducationalPopup backend",
            error : error.message 
        })
    }
}

export const updateEducationalPopup = async(req,res) => {
    try {
        
        const {title , description, _id} = req.body ;
        const id = new mongoose.Types.ObjectId(_id);

        if(!title || !description || !id)
        {
            return res.status(500).json({
                success:false,
                message:"All information not found in updateEducationalPopup backend",
            })
        }

        const updatedPopup = await EducationalPopup.findByIdAndUpdate(
            {_id:id},
            { $set : { title:title, description:description } },
            {new:true}
        )

        return res.status(200).json({
            success:true,
            message:"Popup Updated Successfully" ,
            updatedPopup:updatedPopup,
        })
        

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something went wrong in updateEducationalPopup backend",
            error : error.message 
        })
    }
}

export const getAllEducationalPopupDetails = async(req,res) => {
    try {

        const allDetails = await EducationalPopup.find({}) ;
        return res.status(200).json(allDetails)
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something went wrong in getAllEducationalPopupDetails backend",
            error : error.message 
        })
    }
}