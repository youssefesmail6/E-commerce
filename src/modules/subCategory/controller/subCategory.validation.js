import joi from "joi"
export const addSubCategorySchema = joi.object(
    {
        title:joi.string().min(3).max(30).required(),
        category:joi.string().hex().length(24).required(),
        image:joi.object( {
            fieldname:joi.string().required(),
            originalname:joi.string().required(),     
            encoding:joi.string().required(),
            mimetype:joi.string().valid("image/png","image/jpeg","image/jpg").required(),
            destination:joi.string().required(),
            filename:joi.string().required(),
            path:joi.string().required(),
            size:joi.number().max(5242880).required()
        }).required()
        }

)
export const getByIdSchema =joi.object(
    {
        id:joi.string().hex().length(24).required()
    }   
)
export const updateSubCategorySchema =joi.object(
    {
        id:joi.string().hex().length(24).required(),
        title:joi.string().min(3).max(30).required()
    }   
)