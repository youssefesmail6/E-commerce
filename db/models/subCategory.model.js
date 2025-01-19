
import mongoose from "mongoose";
const schema = new mongoose.Schema({
title:{
type: String,
required:true,
minLength:[3,"title is too short"],
trim:true,
unique: true
},
slug:{
type:String,
required:true,
lowercase:true
},
image:String,
category:{
    type:mongoose.Types.ObjectId,
    ref:"category"
},
createdby:{
    type:mongoose.Types.ObjectId,
    ref:"user"
}

},{
timestamps :true
});

const subCategorymodel=mongoose.model("subCategory",schema)
export default subCategorymodel;