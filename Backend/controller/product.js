Product = require('../models/product')

exports.product_get_all_products = (req, res, next) => {

    console.log('Get all products')
    Product.find(function(err, product){
        if (err) return function(){
            console.log("error");
        };
        res.json(product)
    })};

exports.product_create_new_product = (req, res, next) => {
    
    console.log('Create new product')
    
    Product.findOne({
        ProductName: req.body.ProductName
    }).then
    (product => {
        if(!product)
        {
            Product.create(req.body).then
            (status => 
                {
                    if(status)
                        {
                            res.send({status: 'OK'})
                        }
                }
            )
        }
        else
        {
            res.send({status: 'There is already a product with the similiar name'})
        }
    }
    )};
    
    
    // Product.create(req.body).then(function(product){
    //     console.log(product)
    //     res.end()
    // })};