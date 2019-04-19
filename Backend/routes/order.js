const express = require('express');
const router = express.Router();

const OrderController = require('../controller/order');

router.post('/place_order', OrderController.order_place_order);

module.exports = router;