import subCategoryModel from '../../../../db/models/subCategory.model.js'
import slugify from "slugify";
import { handleError } from '../../../middleware/handleError.js';

const addSubCategory=handleError(
    async(req,res)=>{
        console.log(req.file,"from controller")
        req.body.slug=slugify(req.body.title)
        req.body.image=req.file.filename
       let presubCategory =new subCategoryModel(req.body)
    
       let addedSubCategory=await presubCategory.save()
       res.json({message:"added",addedSubCategory})
    }
)
const getAllSubCategories =async (req,res)=>{
    let filterObje={}
    if(req.params.category){
        filterObje.category=req.params.category
    }
    let getAllSubCategories =await subCategoryModel.find({filterObje})
    res.json({message:"done",getAllSubCategories})
}
const getSubCategoryById =async (req,res)=>{
    let subCategory =await subCategoryModel.findById(req.params.id);
    res.json({message:"done", subCategory})
}
const updateSubCategory =async(req,res)=>{
    req.body.slug =slugify(req.body.title);
    let updatedSubCategory =await subCategoryModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
  updatedSubCategory && res.json({message:"done", updatedSubCategory})
  !updatedSubCategory && res.json({message:"Not found"})
}
const deleteSubCategory =async(req,res)=>{
    let deletedSubCategory =await subCategoryModel.findByIdAndDelete(req.params.id)
  deletedSubCategory && res.json({message:"deleted", deletedSubCategory})
  !deletedSubCategory && res.json({message:"Not found"})
}
export{
    addSubCategory,
    getAllSubCategories,
    getSubCategoryById,
    updateSubCategory,
    deleteSubCategory
}