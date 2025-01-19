import joi from "joi"
export const addProductSchema = joi.object(
    {
        title:joi.string().min(3).max(30).required().trim(),
        description:joi.string().min(3).max(60).required().trim(),
        price:joi.number().min(0).required(),
        priceAfterDiscount:joi.number().min(0).required(),
        quantity:joi.number().min(0).required(),
        category:joi.string().hex().length(24).required(),
        subCategory:joi.string().hex().length(24).required(),
        brand:joi.string().hex().length(24).required(),
        createdBy:joi.string().hex().length(24).optional(),
        imageCover:joi.array().items(
                joi.object( {
                fieldname:joi.string().required(),
                originalname:joi.string().required(),     
                encoding:joi.string().required(),
                mimetype:joi.string().valid("image/png","image/jpeg","image/jpg").required(),
                destination:joi.string().required(),
                filename:joi.string().required(),
                path:joi.string().required(),
                size:joi.number().max(5242880).required()
            }).required()).required() ,

            images:joi.array().items(
                joi.object( {
                fieldname:joi.string().required(),
                originalname:joi.string().required(),     
                encoding:joi.string().required(),
                mimetype:joi.string().valid("image/png","image/jpeg","image/jpg").required(),
                destination:joi.string().required(),
                filename:joi.string().required(),
                path:joi.string().required(),
                size:joi.number().max(5242880).required()
            }).required()).required()





        
    }

)
export const productIdSchema =joi.object(
    {
        id:joi.string().hex().length(24).required()
    }   
)
export const updateProductSchema =joi.object(
    {
        id:joi.string().hex().length(24).required(),
        title:joi.string().min(3).max(30).required().trim(),
        description:joi.string().min(3).max(60).required().trim(),
        price:joi.number().min(0).required(),
        priceAfterDiscount:joi.number().min(0).required(),
        quantity:joi.number().min(0).required(),
        category:joi.string().hex().length(24).required(),
        subCategory:joi.string().hex().length(24).required(),
        brand:joi.string().hex().length(24).required(),
        createdBy:joi.string().hex().length(24).optional(),
        imageCover:joi.array().items(
                joi.object( {
                fieldname:joi.string().required(),
                originalname:joi.string().required(),     
                encoding:joi.string().required(),
                mimetype:joi.string().valid("image/png","image/jpeg","image/jpg").required(),
                destination:joi.string().required(),
                filename:joi.string().required(),
                path:joi.string().required(),
                size:joi.number().max(5242880).required()
            }).required()).required() ,

            images:joi.array().items(
                joi.object( {
                fieldname:joi.string().required(),
                originalname:joi.string().required(),     
                encoding:joi.string().required(),
                mimetype:joi.string().valid("image/png","image/jpeg","image/jpg").required(), //hana5od pdf
                destination:joi.string().required(),
                filename:joi.string().required(),
                path:joi.string().required(),
                size:joi.number().max(5242880).required()
            }).required()).required()


    }   
)
