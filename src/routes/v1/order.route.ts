import express, { Router } from 'express';
import { createOrder, deleteOrder, getOrder, getOrders, updateOrder } from '../../controllers/order.controller';

const router: Router = express.Router();

// TODO: add validate middleware

// prettier-ignore
router.route("/")
  .get(getOrders)
  .post(createOrder);

// prettier-ignore
router.route("/:id")
  .get(getOrder)
  .put(updateOrder)
  .delete(deleteOrder);

export default router;
