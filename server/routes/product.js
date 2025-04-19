import express from "express";
import { get_products, get_product_by_id } from "../controller/ProductController.js";

const router = express.Router();

router.route('/').get(get_products);
router.route('/:id').get(get_product_by_id);

export default router;