import express from "express";
import {
    addOrderItmes,
    getMyOrders,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
    getOrders,
} from "../controller/OrderController.js";
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, addOrderItmes).get(protect, admin, getOrders);
router.route('/my-orders').get(protect, getMyOrders);
router.route('/:id').get(protect, admin, getOrderById);
router.route('/:id/pay').get(protect, admin, updateOrderToPaid);
router.route('/:id/deliver').get(protect, admin, updateOrderToDelivered);

export default router;