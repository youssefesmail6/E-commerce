import categoryModel from '../../../../db/models/category.model.js'
import slugify from "slugify";
import { handleError } from '../../../middleware/handleError.js';
const addCategory=handleError(
    async(req,res)=>{
        console.log(req.file,"from controller")
        req.body.slug=slugify(req.body.title)
        req.body.image=req.file.filename
       let precategory =new categoryModel(req.body)
    
       let addedCategory=await precategory.save()
       res.json({message:"added",addedCategory})
    }
)
const getAllCategories =async (req,res)=>{
    let getAllCategories =await categoryModel.find()
    res.json({message:"done",getAllCategories})
}
const getCategoryById =async (req,res)=>{
    let Category =await categoryModel.findById(req.params.id);
    res.json({message:"done", Category})
}
const updateCategory =async(req,res)=>{
    req.body.slug =slugify(req.body.title);
    let updatedCategory =await categoryModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
  updatedCategory && res.json({message:"done", updatedCategory})
  !updatedCategory && res.json({message:"Not found"})
}
const deleteCategory =async(req,res)=>{
    let deletedCategory =await categoryModel.findByIdAndDelete(req.params.id)
  deletedCategory && res.json({message:"deleted", deletedCategory})
  !deletedCategory && res.json({message:"Not found"})
}
export{
    addCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
}