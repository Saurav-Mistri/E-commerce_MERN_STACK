import mongoose from "mongoose";

const order_schema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    order_items: [
        {
            name: {
                type: String,
                required: true,
            },
            qty: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            price: {
                type: String,
                required: true,
            },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Product",
            },
        }
    ],
    shipping_address: {
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        postalCode: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
    },
    payment_method: {
        type: String,
        required: true,
    },
    payment_result: {
        id: {
            type: String,
        },
        status: {
            type: String,
        },
        update_time: {
            type: String,
        },
        email_address: {
            type: String,
        },
    },
    item_price: {
        type: Number,
        required: true,
        default: 0.0,
    },
    tax_price: {
        type: Number,
        required: true,
        default: 0.0,
    },
    shipping_price: {
        type: Number,
        required: true,
        default: 0.0,
    },
    total_price: {
        type: Number,
        required: true,
        default: 0.0,
    },
    is_paid: {
        type: Boolean,
        required: true,
        default: false,
    },
    paid_at: {
        type: Date,
    },
    is_delivered: {
        type: Boolean,
        required: true,
        default: false,
    },
    delivered_at: {
        type: Date,
    },
}, {
    timestamps: true,
});

const Order = mongoose.model("Order", order_schema);

export default Order;