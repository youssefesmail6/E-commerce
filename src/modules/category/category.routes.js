import express from "express";
import { addCategory, deleteCategory, getAllCategories,getCategoryById,updateCategory} from "./controller/category.controller.js";
import { validation } from "../../middleware/validation.js";
import { addCategorySchema, getByIdSchema, updateCategorySchema } from "./controller/category.validation.js";
import { uploadSingle } from "../../utils/fileUpload.js";
import subCategoryRoutes from "../subCategory/subCategory.routes.js";

const categoryRoutes=express.Router();

categoryRoutes.use("/:category/subCategory",subCategoryRoutes)
categoryRoutes.route("/")
.get(getAllCategories)
.post( uploadSingle('image'), validation (addCategorySchema), addCategory)


categoryRoutes.route("/:id")
.get(validation (getByIdSchema),getCategoryById)
.patch(validation (updateCategorySchema),updateCategory)
.delete(validation (getByIdSchema),deleteCategory)
export default categoryRoutes;