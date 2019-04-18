Customer = require('../models/customer')

exports.customer_get_customer = (req, res, next) => {

    console.log('Get Customer for Login')
    Customer.find(function (err, customer) {
        if (err) return function () {
            console.log("error");
        };
        res.json(customer)
    })
};

exports.customer_login_customer = (req, res, next) => {

    console.log("CLIENT REQUESTING LOGIN WITH CREDENTIALS: " + req.body.Email + " and " + req.body.Password)
    Customer.findOne({
        'Email': req.body.Email,
        'Password': req.body.Password
    }).then(doc => {
        if (doc) {
            res.send({
                status: 'Login Successful'
            })
        } else {
            res.send({
                status: 'Email or Password is incorrect!'
            })
        }
    })
}

exports.customer_add_new_customer = (req, res, next) => {

    console.log('Create new Customer')

    //check if there isn't any account associated with the same email
    Customer.findOne({
        Email: req.body.Email
    }).then(customer => {
            if (!customer) {
                Customer.create(req.body).then(status => {
                    if (status) {
                        res.send({
                            status: 'Sign Up Successful'
                        })
                    }
                })
            } else {
                res.send({
                    status: 'Error! There is an account already registered with this Email'
                })
            }
        }



    )
};

exports.customer_add_product_in_wishlist = (req, res, next) => {

    console.log("Customer REQUESTING addition of Product in Wishlist: ", req.body.ProductName);

    Customer.findOne({
        Email: req.body.Email
    }).then(doc => {
        doc.Wishlist.push(req.body.ProductName)
        doc.save();
        // res.send(req.body.ProductName+" added to Wishlist of "+doc.CustomerName+" successfully!");
        res.send({
            status: 'ok'
        });

    }).catch(e => {
        console.log(e);
    })

};

exports.customer_add_product_in_cart = (req, res, next) => {

    console.log("Customer REQUESTING addition of Product in Cart: ", req.body.ProductName);

    var flag = false;
    Customer.findOne({
        Email: req.body.Email
    }).then(doc => {

        doc.Cart.forEach(element => {
            if (req.body.ProductName == element) {
                flag = true;
            }
        })
        if (flag) {
            res.send({
                status: 'Already exsits'
            });
        } else {
            doc.Cart.push(req.body.ProductName);
            doc.save();
            res.send({
                status: 'ok'
            });
        }
    }).catch(e => {
        console.log(e);
    })

    //     doc.Cart.push(req.body.ProductName)
    //     doc.save();
    //    // res.send(req.body.ProductName+" added to Cart of "+doc.CustomerName+" successfully!");
    //    res.send({status: 'ok'});



};

exports.customer_remove_product_from_wishlist = (req, res, next) => {

    console.log("Customer REQUESTING removal of Product in Wishlist: ", req.body.ProductName);

    Customer.findOneAndUpdate({
        Email: req.body.Email
    }, {
        $pull: {
            Wishlist: req.body.ProductName
        }
    }, {
        new: true
    }).then(doc => {
        res.send({
            status: 'ok'
        });
        console.log(doc);
    }).catch(e => {
        console.log(e);
    })

};

exports.customer_remove_product_from_cart = (req, res, next) => {

    console.log("Customer REQUESTING removal of Product in Cart: ", req.body.ProductName);

    Customer.findOneAndUpdate({
        Email: req.body.Email
    }, {
        $pull: {
            Cart: req.body.ProductName
        }
    }, {
        new: true
    }).then(doc => {
        res.send({
            status: 'ok'
        });
        console.log(doc);
    }).catch(e => {
        console.log(e);
    })

};

exports.customer_get_wishlist = (req, res, next) => {
    console.log("\nCUSTOMER REQUESTING HIS WISHLIST: ", req.body)

    Customer.findOne({
        Email: req.body.Email
    }).select('Wishlist').then((doc) => {
        res.send(doc)
    })


};

exports.customer_get_wishlist_products_details = (req, res, next) => {
    let arr = []
    Customer.findOne({
        Email: req.body.Email
    }).select('Wishlist').then((doc) => {
        doc.Wishlist.forEach(element => {
            Product.findOne({
                ProductName: element
            }).then((product) => {
                arr.push(product);
                if (doc.Wishlist.length == arr.length) {
                    res.send({
                        "Array": arr
                    })
                }
            })
        });
    })
};

exports.customer_get_cart = (req, res, next) => {
    console.log("\nCUSTOMER REQUESTING HIS CART: ", req.body)

    Customer.findOne({
        Email: req.body.Email
    }).select('Cart').then((doc) => {
        res.send(doc)
    })


};

exports.customer_get_cart_products_details = (req, res, next) => {
    let arr = []
    Customer.findOne({
        Email: req.body.Email
    }).select('Cart').then((doc) => {
        doc.Cart.forEach(element => {
            Product.findOne({
                ProductName: element
            }).then((product) => {
                arr.push(product);
                if (doc.Cart.length == arr.length) {
                    res.send({
                        "Array": arr
                    })
                }
            })
        });
    })
};

exports.customer_get_name = (req, res, next) => {

    Customer.findOne({
        Email: req.body.Email
    }).select('CustomerName').then((doc) => {
        res.send({
            "Customer": doc
        });
    })

};

exports.customer_get_optical_specs = (req, res, next) => {

    Customer.findOne({
        Email: req.body.Email
    }).select('OpticalSpecifications').then((doc) => {
        res.send(
            doc
        );
    })

};

// exports.customer_check_optic_specs = (req, res, next) => {

//     Customer.findOne({
//         Email: req.body.Email
//     }).then((doc) => {
//         if (doc.OpticalSpecifications.Cylinderical == "{}" && doc.OpticalSpecifications.Spherical == "{}" && doc.OpticalSpecifications.Axis == "{}") {
//             res.send({
//                 status: 'Empty'
//             })
//         } else {
//             res.send(doc.OpticalSpecifications)
//         }
//     })
// };

exports.customer_check_address_and_specs = (req, res, next) => {

    Customer.findOne({
        Email: req.body.Email
    }).then((doc) => {
        if (doc.Address == "{}" && doc.OpticalSpecifications == "{ Cylinderical: {}, Spherical: {}, Axis: {} }") {
            res.send({
                status: 'address and optics empty'
            })
        } else if (doc.Address == "{}") {
            res.send({
                status: 'address empty'
            })
        } else if (doc.OpticalSpecifications == "{ Cylinderical: {}, Spherical: {}, Axis: {} }") {
            res.send({
                status: 'optics empty'
            })
        } else {
            console.log(doc.Address);
            console.log(doc.OpticalSpecifications);
            res.send({
                status: 'nothing empty'
            })
        }
    })
};



exports.customer_save_address = (req, res, next) => {
    console.log(req.body.Email);
    Customer.findOne({
        Email: req.body.Email
    }).then((customer) => {
        console.log(customer);
        Addressnew = {
            Building: req.body.Building,
            Street: req.body.Street,
            City: req.body.City,
            Landmark: req.body.Landmark,
            Province: req.body.Province,
            PostalCode: req.body.PostalCode,
            Phone: req.body.Phone,
            AlternativePhone: req.body.AlternativePhone
        };
        customer.Address = Addressnew;
        customer.save((err) => {
            if (err) {
                console.log(err);
            } else {
                res.send({
                    status: 'OK'
                });
            }
        });
    });



};

exports.customer_save_opticspecs = (req, res, next) => {

    console.log(req.body.Email);
    Customer.findOne({
        Email: req.body.Email
    }).then((customer) => {
        OpticsSpecsnew = {
            Cylinderical: {
                "LeftEye": req.body.CylindericalLeft,
                "RightEye": req.body.CylindericalRight
            },
            Spherical: {
                "LeftEye": req.body.SphericalLeft,
                "RightEye": req.body.SphericalRight
            },
            Axis: {
                "LeftEye": req.body.AxisLeft,
                "RightEye": req.body.AxisRight
            },
            IPD: req.body.IPD
        };
        customer.OpticalSpecifications = OpticsSpecsnew;
        customer.save((err) => {
            if (err) {
                console.log(err);
            } else {
                res.send({
                    status: 'ok'
                });
            }
        });
    });

};