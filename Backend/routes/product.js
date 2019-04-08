const express = require('express');
const router = express.Router();
const ProductController = require('../controller/product')

router.get('/',ProductController.product_get_all_products);

router.post('/',ProductController.product_create_new_product);


module.exports = router;