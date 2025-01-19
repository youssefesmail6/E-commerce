
import express from "express"
import { validation } from "../../middleware/validation.js"
import{addBrandSchema,brandIdSchema,updateBrandSchema} from "./controller/brand.validation.js"
import { uploadSingle } from "../../utils/fileUpload.js"
import { addBrand, getBrandById,deleteBrand, getAllBrands, updateBrand } from "./controller/brand.controller.js";

const brandRoutes=express.Router();
brandRoutes.route("/")
.get(getAllBrands)
.post( uploadSingle('image'), validation (addBrandSchema), addBrand)
brandRoutes.route("/:id")
.get(validation (brandIdSchema),getBrandById)
.patch(validation (updateBrandSchema),updateBrand)
.delete(validation (brandIdSchema),deleteBrand)

export default brandRoutes;
