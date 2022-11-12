import express, { Router } from 'express';
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct
} from '../../controllers/product.controller';

const router: Router = express.Router();

// TODO: add validate middleware

// prettier-ignore
router.route("/")
  .get(getProducts)
  .post(createProduct);

// prettier-ignore
router.route("/:id")
  .get(getProduct)
  .put(updateProduct)
  .delete(deleteProduct);

export default router;
