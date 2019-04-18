const express = require('express');
const router = express.Router();

const CustomerController = require('../controller/customer')

router.get('/',CustomerController.customer_get_customer);

router.post('/signup',CustomerController.customer_add_new_customer);

router.post('/login',CustomerController.customer_login_customer);

router.post('/add_cart',CustomerController.customer_add_product_in_cart);

router.post('/add_wishlist',CustomerController.customer_add_product_in_wishlist);

router.post('/remove_wishlist',CustomerController.customer_remove_product_from_wishlist);

router.post('/remove_cart',CustomerController.customer_remove_product_from_cart);

router.post('/wishlist',CustomerController.customer_get_wishlist);

router.post('/cart',CustomerController.customer_get_cart);

router.post('/getname', CustomerController.customer_get_name);

router.post('/cart_products_details', CustomerController.customer_get_cart_products_details);

router.post('/wishlist_products_details', CustomerController.customer_get_wishlist_products_details);

router.post('/check_address_and_specs', CustomerController.customer_check_address_and_specs);

//router.post('/check_optic_specs', CustomerController.customer_check_optic_specs);

router.post('/save_address', CustomerController.customer_save_address);

router.post('/save_opticspecs', CustomerController.customer_save_opticspecs);

router.post('/get_optical_specs', CustomerController.customer_get_optical_specs);

module.exports = router;