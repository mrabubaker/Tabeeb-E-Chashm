Order = require('../models/order');

exports.order_place_order = (req,res, next) => {
    
    console.log("PLACING ORDER");

    Order.create(req.body);
    res.send({status: 'ok'})

};