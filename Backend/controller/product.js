Product = require('../models/product')

exports.product_get_all_products = (req, res, next) => {

    console.log('Get all products')
    Product.find(function (err, product) {
        if (err) return function () {
            console.log("error");
        };
        res.json(product)
    })
};

exports.product_create_new_product = (req, res, next) => {

    console.log('Create new product')

    Product.findOne({
        ProductName: req.body.ProductName
    }).then
        (product => {
            if (!product) {
                Product.create(req.body).then
                    (status => {
                        if (status) {
                            res.send({ status: 'OK' })
                        }
                    }
                    )
            }
            else {
                res.send({ status: 'Insertion Failed. There is already a product with the same name' })
            }
        }
        )
};


exports.product_get_tag_products = (req, res, next) => {
    console.log('CLIENT REQUESTING TAG:  ', req.body);

    Product.find({ TAG: req.body.TAG })
        .then(doc => {
            if (doc) {
                res.send({ "products": doc });
                //console.log(doc);
                //res.end();
            }
            //res.end();
        }).catch(e => {
            console.log(e);
        })
};

exports.product_get_category_products = (req, res, next) => {
    console.log('CLIENT REQUEST PRODUCT: ', req.body);
    let products = []
    Product.find()
        .then(doc => {
            if (doc) {
                //res.send({"Array":doc});
                doc.forEach(element => {
                    element.ProductSpecifications.Category.forEach(cat => {
                        if (cat == req.body.Category) {
                            products.push(element)
                        }
                    });
                });
                //console.log(doc);
                res.send({ "products": products });
            }
            else {
                res.send("No Such Product found!");
            }
            //res.end();
        }).catch(e => {
            console.log(e);
        })
};


exports.product_get_name_products = (req, res, next) => {
    console.log('CLIENT REQUEST PRODUCT:  ', req.body);

    Product.find({ ProductName: req.body.ProductName })
        .then(doc => {
            if (doc) {
                res.send({ "Array": doc });
                //console.log(doc);
                //res.end();
            }
            //res.end();
        }).catch(e => {
            console.log(e);
        })
};

exports.product_details = (req, res, next) => {
    console.log('Product details:  ', req.body);

    Product.findOne({ _id: req.body.productid })
        .then(doc => {
            if (doc) {
                res.send(doc);
                //console.log(doc);
                //res.end();
            }
            //res.end();
        }).catch(e => {
            console.log(e);
        })
};
