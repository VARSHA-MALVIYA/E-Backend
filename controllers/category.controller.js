import Category from "../models/category.model.js"



export const getAllCategories = async(req,res)=>{
    try {
        const allCategories = await Category.find({}) ;

        return res.status(200).json(allCategories)

    } catch (error) {
        return res.status(200).json({
            success:false,
            message:"Failed in getAllCategories backend",
            error:error.message
        })
    }
}