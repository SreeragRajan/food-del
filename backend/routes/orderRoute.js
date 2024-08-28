import express from 'express';
import authMiddleware from '../middleware/auth.js';
import { placeOrder } from '../controllers/orderController.j';

const orderRouter = express.Router();

orderRouter.post("/place", authhMiddleware, placeOrder);





export default orderRouter;