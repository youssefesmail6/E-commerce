import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import usermodel from "../../../db/models/user.model.js";
import { handleError } from "../../middleware/handleError.js";
import { AppError } from "../../utils/AppError.js";

export const signUp = handleError(async (req, res, next) => {
    let isFound = await usermodel.findOne({ email: req.body.email });
    if (isFound) return next(new AppError("Account Already Exist", 409));
    let user = new usermodel(req.body);
    await user.save();
    res.json({ message: "added", user });
});

export const signIn = handleError(async (req, res, next) => {
    let { email, password } = req.body;
    let isFound = await usermodel.findOne({ email });
    if (!isFound) return next(new AppError("Invalid email or password", 404));

    const match = await bcrypt.compare(password, isFound.password);
    if (!match) return next(new AppError("Invalid email or password", 401));

    let token = jwt.sign({ name: isFound.name, userId: isFound._id, role: isFound.role }, process.env.SECRET_KEY);
    res.json({ message: "welcome", token });
});


export const protectRoutes =handleError(async(req,res,next)=>{
    let {token}=req.headers;
    if(!token)return next(new AppError("token not provided",401))
    let decoded =await jwt.verify(token,process.env.SECRET_KEY)
let user =await usermodel.findById(decoded.userId)
if(!user)return next(new AppError("invalid user",404))
if(user.changePasswordAt){
let changePasswordAt=parseInt(user.changePasswordAt.getTime()/1000)
if(changePasswordAt>decoded.iat)
return next( AppError("token invalid",401))
}
req.user=user
next()
}

)
export const allowTo=(...roles)=>{
    
    return handleError((req,res,next )=>{
    if(!roles.includes(req.user.role)) return next (new AppError("not Authorized",403))
    next();    
})
}