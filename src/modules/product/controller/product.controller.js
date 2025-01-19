import productModel from '../../../../db/models/product.model.js'
import slugify from "slugify";
import { handleError } from '../../../middleware/handleError.js';

const addProduct=handleError(
    async(req,res)=>{
console.log(req.files);
        req.body.slug=slugify(req.body.title)
        req.body.imageCover=req.files.imageCover[0].filename
        req.body.images =req.files.images.map(ele=> ele.filename)
       let preProduct =new productModel(req.body)
    
       let added=await preProduct.save()
       res.json({message:"added",added})
    }
)
const getAllProducts =handleError(
    async (req,res)=>{
    let Allproducts =await productModel.find()
    res.json({message:"done",Allproducts})
}
) 
const getProductById =async (req,res)=>{
    let product =await productModel.findById(req.params.id);
    res.json({message:"done", product})
}
const updateProduct =handleError(
    async(req,res)=>{
    req.body.slug =slugify(req.body.title);
    if(req.files.imageCover) 
    req.body.imageCover=req.files.imageCover[0].filename
    req.body.images=req.files.images.map(ele=> ele.filename)
    let updateProduct =await productModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    updateProduct && res.json({message:"done", updateProduct})
  !updateProduct && res.json({message:"Not found"})
}
)
const deleteProduct =handleError(async(req,res)=>{
    let Product=await productModel.findByIdAndDelete(req.params.id)
    Product && res.json({message:"deleted", Product})
  !Product && res.json({message:"Not found"})
}
)
export{
 addProduct,
 getAllProducts,
 getProductById,
 updateProduct,
 deleteProduct
}