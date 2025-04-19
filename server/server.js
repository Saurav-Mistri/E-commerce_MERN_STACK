import express from 'express';
import { PORT } from '../config/index.js';
import db_connect from './config/database.js';
import product_routes from './routes/product.js';

const port = PORT;
// Connect to Database
db_connect();

const app = express();

app.get('/', (req, res) => {
    res.send('API is running...!');
});

app.use('/api/products', product_routes);

app.listen(port, () => console.log(`Server running on port ${port}`));