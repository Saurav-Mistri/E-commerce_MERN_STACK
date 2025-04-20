import jwt from "jsonwebtoken";
import { NODE_ENV, JWT_SECRET_TOKEN } from "../../config/index.js";

const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, JWT_SECRET_TOKEN, {
        expiresIn: '30d'
    });

    // Set JWT as HTTP-only cookie
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: NODE_ENV != 'development',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
    });
}

export default generateToken;