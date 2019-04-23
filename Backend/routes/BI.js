const express = require('express');
const router = express.Router();

const pythonController = require('../controller/pythonrequest');

router.get('/send_request', pythonController.python_request);

// router.post('/get_order', OrderController.order_get_order_details);

// router.post('/get_shipping_and_price',OrderController.order_get_shipping_address_product_price);

// router.post('/all_order', OrderController.order_get_all_order_details);

module.exports = router;