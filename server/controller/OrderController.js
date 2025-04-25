import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/Order.js";

// @desc Create new orders
// @route POST /api/orders
// @access Private
const addOrderItmes = asyncHandler(async (req, res) => {
    const {
        order_items,
        shipping_address,
        payment_method,
        items_price,
        tax_price,
        shipping_price,
        total_price,
    } = req.body;

    if (order_items && order_items.length === 0) {
        res.status(400);
        throw new Error('No order items!');
    } else {
        const order = new Order({
            order_items: order_items.map((x) => ({
                ...x,
                product: x._id,
                _id: undefined
            })),
            user: req.user._id,
            shipping_address,
            payment_method,
            items_price,
            tax_price,
            shipping_price,
            total_price,
        });

        const createdOrder = await order.save();

        res.status(201).json(createdOrder);
    }

});

// @desc Get Logged in user orders
// @route GET /api/order/myorders
// @access Private
const getMyOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.status(200).json(orders);
});

// @desc Get order by ID
// @route GET /api/order/:id
// @access Private
const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email');
    if (order) {
        res.status(200).json(order);
    } else {
        res.status(404);
        throw new Error('Order not found!')
    }
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