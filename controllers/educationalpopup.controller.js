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

export const getAllEducationalPopupDetails = async(req,res) => {
    try {

        const allDetails = await EducationalPopup.find({}) ;
        
        return res.status(200).json({
            success:true,
            message:"These are all EducationalPopupDetails",
            data: allDetails,
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something went wrong in getAllEducationalPopupDetails backend",
            error : error.message 
        })
    }
}