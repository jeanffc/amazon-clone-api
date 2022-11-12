import express, { Router } from 'express';

import productRouter from './product.route';
import orderRouter from './order.route';

const router: Router = express.Router();

router.use('/products', productRouter);
router.use('/orders', orderRouter);

export default router;
