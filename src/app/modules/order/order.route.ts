import express from 'express';
import { OrderControllers } from './order.controller';
import { orderValidation } from './order.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

// create new order
router.post('/', validateRequest(orderValidation.createOrderSchema),OrderControllers.createNewOrder);
// retrieve all orders
router.get('/', OrderControllers.getAllOrders);

export const OrderRoutes = router;
