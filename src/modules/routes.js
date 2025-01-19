
import categoryRoutes from "./category/category.routes.js"
import subCategoryRoutes from "./subCategory/subCategory.routes.js"
import brandRoutes from "./brand/brand.routes.js"
import productRoutes from "./product/product.routes.js"
import userRoutes from "./user/user.routes.js"
import authRoutes from "./auth/auth.routes.js"
export const allRoutes =(app)=>{
    app.use("/api/v1/category",categoryRoutes)
    app.use("/api/v1/subCategory",subCategoryRoutes)
    app.use("/api/v1/brand",brandRoutes)
    app.use("/api/v1/product",productRoutes)
    app.use("/api/v1/user",userRoutes)
    app.use("/api/v1/auth",authRoutes)

}