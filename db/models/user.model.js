import mongoose from "mongoose";
import bcrypt from "bcrypt"
const userSchema = new mongoose.Schema({
name:{
type: String,
required:true,
trim:true,
},
email:{
    type: String,
    required:true,
    unique:true,
    },
   isVerfied:{
        type:Boolean,
        default:false
    },
    phone:String,
    role:{
        type: String,
        enums:["admin","user"],
        default:"user"
    },
    password:{
        type:String,
        required:true,
    },
    isActive:{
        type:Boolean,
        default:true
    },
    changePasswordAt:Date,
    isBlocked:{
        type:Boolean,
        default:false
    },
    
},{
timestamps :true
})
userSchema.pre("save",function(){
    console.log(this)
    this.password=bcrypt.hashSync(this.password,parseInt(process.env.SALT_ROUND))
})
userSchema.pre("findOneAndUpdate",function(){
    console.log(this)
    this._update.password=bcrypt.hashSync(this._update.password,parseInt(process.env.SALT_ROUND))
})


const usermodel=mongoose.model("user",userSchema)
export default usermodel;