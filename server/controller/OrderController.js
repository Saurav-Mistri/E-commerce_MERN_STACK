import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/Order.js";

// @desc Create new orders
// @route POST /api/orders
// @access Private
const addOrderItmes = asyncHandler(async (req, res) => {
    res.send('add order items!');
});

// @desc Get Logged in user orders
// @route GET /api/order/myorders
// @access Private
const getMyOrders = asyncHandler(async (req, res) => {
    res.send('get my orders!');
});

// @desc Get order by ID
// @route GET /api/order/:id
// @access Private
const getOrderById = asyncHandler(async (req, res) => {
    res.send('get order by ID!');
});

// @desc Update order to paid
// @route GET /api/order/:id/pay
// @access Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
    res.send('Update order to paid!');
});

// @desc Update order to delivered
// @route GET /api/order/:id/deli ver
// @access Private
const updateOrderToDelivered = asyncHandler(async (req, res) => {
    res.send('Update order to delivered!');
});

// @desc Get all Orders
// @route GET /api/orders
// @access Private/Admin
const getOrders = asyncHandler(async (req, res) => {
    res.send('Get all orders!');
});

export {
    addOrderItmes,
    getMyOrders,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
    getOrders,
};