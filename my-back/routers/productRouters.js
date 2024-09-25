

const express = require('express');
const { getAllProducts, getProductById, createProduct, updateProductById, deleteProductById } = require('../controllers/cardProduct');

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products', createProduct);
router.put('/products/:id', updateProductById);
router.delete('/products/:id', deleteProductById);

module.exports = router;
