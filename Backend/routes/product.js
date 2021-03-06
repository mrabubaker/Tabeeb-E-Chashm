const express = require('express');
const router = express.Router();
const ProductController = require('../controller/product')

router.get('/get_all_products',ProductController.product_get_all_products);

router.post('/create_product',ProductController.product_create_new_product);

router.post('/get_tag_products',ProductController.product_get_tag_products);

router.post('/get_name_products',ProductController.product_get_name_products);

router.post('/get_category_products',ProductController.product_get_category_products);

router.post('/armodel',ProductController.product_get_armodel);

router.post('/viewdetails', ProductController.product_details);

router.post('/deleteproduct', ProductController.product_delete);

router.post('/search', ProductController.product_search)

module.exports = router;