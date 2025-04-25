import dotenv from "dotenv";
dotenv.config();

const NODE_ENV = process.env.NODE_ENV;

const PORT = process.env.PORT || 5000;

const MONGO_URI = process.env.MONGO_URI;

const JWT_SECRET_TOKEN = process.env.JWT_SECRET_TOKEN;

const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;

export { NODE_ENV, PORT, MONGO_URI, JWT_SECRET_TOKEN, PAYPAL_CLIENT_ID }; 
