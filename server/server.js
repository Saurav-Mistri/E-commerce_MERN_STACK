import express from 'express';
import { PORT } from '../config/index.js';
import cookieParser from 'cookie-parser';
import db_connect from './config/database.js';
import product_routes from './routes/product.js';
import user_routes from './routes/user.js';
import order_routes from './routes/order.js';
import { not_found, error_handler } from './middleware/errorHandler.js';

const port = PORT;
// Connect to Database
db_connect();

const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('API is running...!');
});

app.use('/api/products', product_routes);
app.use('/api/users', user_routes);
app.use('/api/orders', order_routes);

app.use(not_found);
app.use(error_handler);

app.listen(port, () => console.log(`Server running on port ${port}`));