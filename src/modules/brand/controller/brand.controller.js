import brandModel from '../../../../db/models/brand.model.js'
import slugify from "slugify";
import { handleError } from '../../../middleware/handleError.js';

const addBrand=handleError(
    async(req,res)=>{
        console.log(req.file,"from controller")
        req.body.slug=slugify(req.body.title)
        req.body.logo=req.file.filename
       let prebrand =new brandModel(req.body)
    
       let added=await prebrand.save()
       res.json({message:"added",added})
    }
)
const getAllBrands =handleError(
    async (req,res)=>{
    let Allbrands =await brandModel.find()
    res.json({message:"done",Allbrands})
}
) 
const getBrandById =async (req,res)=>{
    let brand =await brandModel.findById(req.params.id);
    res.json({message:"done", brand})
}
const updateBrand =handleError(
    async(req,res)=>{
    req.body.slug =slugify(req.body.title);
    if(req.file) req.body.logo=req.file.filename
    let updatedbrand =await brandModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
  updatedbrand && res.json({message:"done", updatedbrand})
  !updatedbrand && res.json({message:"Not found"})
}
)
const deleteBrand =handleError(async(req,res)=>{
    let brand =await brandModel.findByIdAndDelete(req.params.id)
  brand && res.json({message:"deleted", brand})
  !brand && res.json({message:"Not found"})
}
)
export{
 addBrand,
 getAllBrands,
 getBrandById,
 updateBrand,
 deleteBrand
}