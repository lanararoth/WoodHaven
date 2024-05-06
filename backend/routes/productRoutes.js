const express = require('express');
const Product = require('../model/product');
const router = express.Router();

// POST: Create a new product
router.post('/addproduct', async (req, res) => {
  const { name, description, price, stock, category, imgUrl } = req.body;
  const product = new Product({ name, description, price, stock, category, imgUrl });
  try {
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET: Fetch all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
