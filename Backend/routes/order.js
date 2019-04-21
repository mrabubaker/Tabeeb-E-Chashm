const express = require('express');
const router = express.Router();

const OrderController = require('../controller/order');

router.post('/place_order', OrderController.order_place_order);

router.post('/get_order', OrderController.order_get_order_details);


router.post('/all_order', OrderController.order_get_all_order_details);

module.exports = router;