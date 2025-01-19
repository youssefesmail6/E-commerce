import mongoose from "mongoose"
import { AppError } from "./AppError.js";
import multer from "multer";

const fileUpload =()=>{
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'uploads')
        },
        filename: function (req, file, cb) {
          cb(null,new mongoose.Types.ObjectId + "_" + file.originalname)
        }
      });
      function fileFilter (req, file, cb) {

        // The function should call `cb` with a boolean
        // to indicate if the file should be accepted
      if(file.mimetype.startsWith("image")){
        cb(null, true)
      }
      else{
cb(new AppError("invalid image type",401),false)
      }
    
      }
      
      const upload = multer({ storage: storage,fileFilter })
return upload
    }
    export const uploadSingle =fieldName=>fileUpload().single(fieldName)
    export const uploadArrayFile =fieldName=>fileUpload().array(fieldName,10)
    export const uploadFields =fieldsName =>fileUpload().fields(fieldsName)