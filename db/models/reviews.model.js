import mongoose from "mongoose";
const schema = new mongoose.Schema({
text:{
type: String,
required:true,
trim:true,
unique: true
},

createdby:{
    type:mongoose.Types.ObjectId,
    ref:"user"
},
product:{
    type:mongoose.Types.ObjectId,
    ref:"product"
}

},{
timestamps :true
});

const reviewsmodel=mongoose.model("reviews",schema)
export default reviewsmodel;