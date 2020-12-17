import express from 'express';
const router = express.Router();
import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';

// @desc fetch all products
// @route GET /api/products fetch all products
// @public

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find();
    res.json(products);
  })
);

// @desc fetch single products
// @route GET /api/product/:id fetch all products
// @public

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
      throw new Error('product not found');
    }
  })
);

export default router;
