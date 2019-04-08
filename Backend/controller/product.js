Product = require('../models/product')

exports.product_get_all_products = (req, res, next) => {
    // console.log(Session.find());
    // res.json({type:'GET'});
    console.log('Get all products')
    Product.find(function(err, product){
        if (err) return function(){
            console.log("error");
        };
        res.json(product)
    })};

exports.product_create_new_product = (req, res, next) => {
    // console.log(Session.find());
    // res.json({type:'GET'});
    
    console.log('Create new product')
    Product.create(req.body).then(function(product){
        res.send(product)
    })};