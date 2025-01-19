import mongoose from "mongoose";
const schema = new mongoose.Schema({
code:{
type: String,
required:true,
trim:true,
unique: true
},

createdby:{
    type:mongoose.Types.ObjectId,
    ref:"user"
},
discount:{
    type:Number,
    min:0
},
expire:Date

},{
timestamps :true
});

const couponmodel=mongoose.model("coupon",schema)
export default couponmodel;