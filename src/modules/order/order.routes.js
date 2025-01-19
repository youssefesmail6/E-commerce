
import { validation } from "../../middleware/validation.js";
import { auth } from "../../middleware/auth.js";
import { validRoles } from "../../utils/systemRoles.js";


const router = Router();

router.post(
  "/create",
  auth([...validRoles.User, ...validRoles.Admin]),
  validation(createOrderSchema),
  createOrder
);

router.patch("/:orderId",
  validation(cancelOrderSchema),
  auth([...validRoles.User, ...validRoles.Admin]),
  cancelOrder)









export default router;