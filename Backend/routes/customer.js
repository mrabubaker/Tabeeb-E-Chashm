const express = require('express');
const router = express.Router();

const CustomerController = require('../controller/customer')

router.get('/',CustomerController.customer_get_customer);

router.post('/signup',CustomerController.customer_add_new_customer);

router.post('/login',CustomerController.customer_login_customer);

router.post('/add_cart',CustomerController.customer_add_product_in_cart);

router.post('/add_wishlist',CustomerController.customer_add_product_in_wishlist);

router.post('/getname', CustomerController.customer_get_name);

router.post('/cart_products_details', CustomerController.customer_get_cart_products_details);

router.post('/wishlist_products_details', CustomerController.customer_get_wishlist_products_details);

router.post('/remove_wishlist',CustomerController.customer_remove_product_from_wishlist);

router.post('/remove_cart',CustomerController.customer_remove_product_from_cart);

router.post('/save_opticspecs', CustomerController.customer_save_opticspecs);

router.post('/save_address', CustomerController.customer_save_address);

module.exports = router;