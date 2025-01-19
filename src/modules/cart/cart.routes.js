import { Router } from "express";
import * as  cartController from "./cart.controller.js";

import { auth } from "../../middlewares/auth.middleware.js";
import { systemRoles } from "../../utils/system-roles.js";
import { handleError } from "../../middleware/handleError.js";
const router = Router();


router.post('/', auth([systemRoles.USER]), handleError(cartController.addProductToCart))

router.put('/:productId', auth([systemRoles.USER]), handleError(cartController.removeFromcart))

export default router;