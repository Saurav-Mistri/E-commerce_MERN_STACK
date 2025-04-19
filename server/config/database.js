import mongoose from "mongoose";
import { MONGO_URI } from '../../config/index.js';


const db_connect = async () => {
    try {
        const connect = await mongoose.connect(MONGO_URI);
        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default db_connect;