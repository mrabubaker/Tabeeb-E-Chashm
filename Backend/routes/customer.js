const express = require('express');
const router = express.Router();

const CustomerController = require('../controller/customer')

router.get('/',CustomerController.customer_get_customer);

router.post('/signup',CustomerController.customer_add_new_customer);

router.post('/login',CustomerController.customer_login_customer);

module.exports = router;