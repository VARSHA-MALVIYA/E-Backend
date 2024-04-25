import EducationalPopup from '../models/educationalPopup.model.js'
import PreciousMetals from '../models/preciousMetal.model.js'
import Wastes from '../models/waste.model.js'
import Category from '../models/category.model.js'
import User from '../models/user.model.js'
import mongoose from 'mongoose'
import { OperatorApprovedTemplate } from '../MailTemplates/operatorApproved.template.js'
import { sendEmail } from '../utils/mailSender.js'
import { ContactUsTemplate } from '../MailTemplates/contactUs.template.js'


export const addEwasteDetails = async (req,res) => {
    try {

        const {name,category,preciousMetals,modelNumber,greenPoints} = req.body ;

        //  some validations 
        if( !name || !category || !preciousMetals || !modelNumber || !greenPoints )
        {
            return res.status(500).json({
                success:false,
                message:"Please fill all details of E-waste Carefully.",
            })
        }

        // waste ko add karke id le lo
        const waste = await Wastes.create({
            name:name,
            category:category,
            modelNumber:modelNumber,
            greenPoints:greenPoints,
        });

        // jitne bhi precious metals he unko db me store karao fir waste me add kar do unki id
        for(const metal of preciousMetals)
        {
            const addedMetal = await PreciousMetals.create({name:metal.name, weight:metal.weight});

            await Wastes.findByIdAndUpdate(
                {_id:waste._id},
                {
                    $push:{ preciousMetals:addedMetal._id }
                },
                {new:true}
            );
        }

        const wasteToReturn = await Wastes.findById(waste._id).populate("preciousMetals");

        return res.status(200).json({
            success:true,
            message:"Added Ewaste successfully",
            waste:wasteToReturn
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Some error in addEwasteDetails handler ",
        }) 
    }
}

export const addEducationalPopup = async (req,res) => {
    try {

        const {description,title,category} = req.body ;
        
        // some validations 
        if(!description || !title || !category)
        {
            return res.status(500).json({
                success:false,
                message:"Please fill all details of EducationalPopup Carefully.",
            })
        }

        // make and add
        const eduPopup = await EducationalPopup.create({
            description,
            category,
            title,
        });

        return res.status(200).json({
            success:true,
            message:"EducationalPopup inserted successfully",
            eduPopup,
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Some error in addEducationalPopup handler ",
        }) 
    }
}

export const addCategory = async (req,res) => {
    try {

        // category ka naam le lo
        const {categoryName} = req.body ;


        // chhoti si validation kar lo
        if(!categoryName)
        {
            return res.status(500).json({
                success:false,
                message:"Category name not found in addCategory handler",
            })
        }

        const alreadyExits = await Category.findOne({categoryName:categoryName});
        if(alreadyExits)
        {
            return res.status(500).json({
                success:false,
                message:"Category Name already exits",
            })
        }

        // name ka first letter capital krke store kr lo
        let capitalizedCategoryName = capitalizeFirstLetter(categoryName);
        
        
        
        // category ko db me store kr do
        const savedCategory = await Category.create({
            categoryName : capitalizedCategoryName ,
        })

       

        // res return kar do
        return res.status(200).json({
            success:true,
            message:"Category added successfully",
            category:savedCategory,
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something went wrong in addCategory handler",
        })
    }
}

export const getUnapprovedOperators = async(req,res)=>{
    try {

        const unapprovedOperators = await User.find({Role:"Operator",Approved:false})

        return res.status(200).json(unapprovedOperators);
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something went wrong in getUnapprovedOperators handler",
        })
    }
}

export const approveOperator = async(req,res)=>{
    try {

        let {id} = req.body ;

        id =new mongoose.Types.ObjectId(id);

        const user = await User.findByIdAndUpdate(
            {_id:id},
            {$set : {Approved:true} },
            {new:true}
        )

        const mailHTML = OperatorApprovedTemplate(user.Name);
        sendEmail(user.Email,"EcoGeeks","Approval For Operator Role",mailHTML);

        return res.status(200).json({
            success:true,
            message:"Operator Approved Successfully"
        });
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something went wrong in approveOperator handler",
            error:error.message
        })
    }
}

export const contactUs = async(req,res) => {
    try {
        const {firstName,lastName,email,message} = req.body;
        const mailHTML = ContactUsTemplate(firstName,lastName,email,message) 
        sendEmail('vijayrathore2003@gmail.com',"EcoGeeks","Contact Us",mailHTML)

        return res.status(200).json({
            success:true,
            message:"Message sent successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Some error in contactUs backend",
            error:error.message,
        })
    }
}

// edit krna he abhi
export const bulkEwasteAdd = async(req,res) => {
    try {

        const {arrayOfDetails} = req.body ;


        for(const oneMetal of arrayOfDetails)
        {
            const {name,category,preciousMetals,modelNumber,greenPoints} = oneMetal;

            //  some validations 
            if( !name || !category || !preciousMetals || !modelNumber || !greenPoints )
            {
                return res.status(500).json({
                    success:false,
                    message:"Please fill all details of E-waste Carefully.",
                })
            }

            // waste ko add karke id le lo
            const waste = await Wastes.create({
                name:name,
                category:category,
                modelNumber:modelNumber,
                greenPoints:greenPoints,
            });

            // jitne bhi precious metals he unko db me store karao fir waste me add kar do unki id
            for(const metal of preciousMetals)
            {
                const addedMetal = await PreciousMetals.create({name:metal.name, weight:metal.weight});

                await Wastes.findByIdAndUpdate(
                    {_id:waste._id},
                    {
                        $push:{ preciousMetals:addedMetal._id }
                    },
                    {new:true}
                );
            }
        }

    
        return res.status(200).json({
            success:true,
            message:"Added Bulk Ewastes successfully",
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Some error in bulkEwasteAdd handler ",
        }) 
    }
}


// functions 
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



