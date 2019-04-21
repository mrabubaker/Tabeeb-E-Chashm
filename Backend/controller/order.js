Order = require('../models/order');

exports.order_place_order = (req,res, next) => {
    
    console.log("PLACING ORDER");
    // res.send({message : 'Done'})

    console.log(req.body,'');
    var order = new Order(req.body);
    order.save();
   // Order.create(req.body);
    res.send({status: 'ok'})

};

exports.order_get_order_details = (req, res, next) => {
    console.log("WOrking get order details")
    let result = []
    Order.find({
        CustomerEmail: req.body.CustomerEmail
    }).then(orders => {

        orders.forEach(order => {
            order.Product.forEach(product => {

                result.push(new Promise(function (resolve, reject) {
                    Product.findOne({
                        'ProductName': product
                    }).then((pr) => {

                        var date;
                       // console.log(order.OrderStatus)
                        if (order.OrderStatus === "Ordered") {
                           // console.log('here')
                            date = order.OrderDate
                        } else if (order.OrderStatus === "Packed") {
                            //console.log("Packed");
                            date = order.PackedDate
                        } else if (order.OrderStatus === "Shipped") {
                            date = order.ShippedDate
                        } else if (order.OrderStatus === "Delivered") {
                            date = order.DeliveredDate
                        }
                        var obj = {
                            status: order.OrderStatus,
                            date: date,
                            price: order.OrderTotalPrice,
                            productname: pr.ProductName,
                            productphoto: pr.ProductPhoto,
                            productprice: pr.Price,
                        }

                        resolve(obj)
                    });
                }))


            })

        });

        Promise.all(result).then(function (results) {
            res.send({
                Array: results
            })
        })
    });

};

exports.order_get_all_order_details = (req, res, next) => {
    // console.log("all orders working");
    let result = []
    Order.find({
   
    }).then(orders => {

        orders.forEach(order => {
            order.Product.forEach(product => {

                result.push(new Promise(function (resolve, reject) {
                    Product.findOne({
                        'ProductName': product
                    }).then((pr) => {

                        var date;
                       // console.log(order.OrderStatus)
                        if (order.OrderStatus === "Ordered") {
                           // console.log('here')
                            date = order.OrderDate
                        } else if (order.OrderStatus === "Packed") {
                            //console.log("Packed");
                            date = order.PackedDate
                        } else if (order.OrderStatus === "Shipped") {
                            date = order.ShippedDate
                        } else if (order.OrderStatus === "Delivered") {
                            date = order.DeliveredDate
                        }
                        var obj = {
                            status: order.OrderStatus,
                            date: date,
                            productname: pr.ProductName,
                            productphoto: pr.ProductPhoto,
                            productprice: pr.Price,
                        }

                        resolve(obj)
                    });
                }))


            })

        });

        Promise.all(result).then(function (results) {
            res.send({
                Array: results
            })
        })
    });

};