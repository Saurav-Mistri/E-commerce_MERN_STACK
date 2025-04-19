import mongoose from "mongoose";
import { MONGO_URI } from '../config/index.js';
import users from "./data/users.js";
import User from "./models/User.js";
import products from "./data/products.js";
import Product from "./models/Product.js";
import Order from "./models/Order.js";
import db_connect from "./config/database.js";

db_connect();

const import_data = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const user_create = await User.insertMany(users);
        const admin_user = user_create[0]._id;

        const sample_products_create = products.map((product) => {
            return { ...product, user: admin_user };
        });

        await Product.insertMany(sample_products_create);

        console.log('Data Imported!');

        process.exit();

    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
}

const destroy_data = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data Destroyed...!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroy_data();
} else {
    import_data();
}