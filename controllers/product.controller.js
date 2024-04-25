import Product from "../models/products.model.js";



export const addProduct = async(req,res) => {
    try {

        const {
            name,image,greenPoints
        } = req.body;

        if(!name || !image || !greenPoints)
        {
            return res.status(500).json({
                success:false,
                message:"Please fill all details of Product Carefully.",
            })
        }

        const addedProduct = await Product.create({
            Name:name,
            Image:image,
            GreenPoints:greenPoints,
        })

        return res.status(200).json({
            success:true,
            message:'Product added successfully',
            Product:addedProduct,
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Some error in addProduct handler backend',
            error:error.message,
        })
    }
}

export const getAllProducts = async(req,res) => {
    try {

        const allProducts = await Product.find({})
        
        return res.status(200).json(allProducts)

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Some error in getAllProducts handler backend',
            error:error.message,
        })
    }
}


