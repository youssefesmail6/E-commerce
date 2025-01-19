import userModel from '../../../../db/models/user.model.js'
import slugify from "slugify";
import { handleError } from '../../../middleware/handleError.js';
import { AppError } from '../../../utils/AppError.js';

const addUser=handleError(async(req,res,next)=>{
        let user = await userModel.findOne({email:req.body.email})
if(user) return next (new AppError("email already found",409))
       let results =new userModel(req.body)
       let added=await results.save();
       res.json({message:"added",added})
    }
)
const getAllUsers =handleError(
    async (req,res)=>{
    let Allusers =await userModel.find()
    res.json({message:"done",Allusers})
}
) 
const getUserById =async (req,res)=>{
    let user =await userModel.findById(req.params.id);
    res.json({message:"done", user})
}
const updateUser =handleError(
    async(req,res)=>{
    req.body.slug =slugify(req.body.name);
    let updateduser =await userModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
  updateduser && res.json({message:"done", updateduser})
  !updateduser && res.json({message:"Not found"})
}
)
const updatePassword = handleError(async (req, res) => {
   let {id} =req.params;
   req.body.changePasswordAt=Date.now()
   let results=await userModel.findOneAndUpdate({_id:id},req.body,{new:true})
   !results && next(new AppError("Not found",404))
   results && res.json({message:"Done",results})
});

const deleteUser =handleError(async(req,res,next)=>{
    let user =await userModel.findByIdAndDelete(req.params.id)
  user && res.json({message:"deleted", user})
  !user && res.json({message:"Not found"})
}
)
export{
 addUser,
 getAllUsers,
 getUserById,
 updateUser,
 deleteUser,
 updatePassword
}