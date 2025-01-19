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
createdby:{
    type:mongoose.Types.ObjectId,
    ref:"user"
}

},{
timestamps :true
});

schema.post("init",function(doc){
    doc.image="process.env.BASE_URL"+ "uploads/" + doc.image
})
const categorymodel=mongoose.model("category",schema)
export default categorymodel;