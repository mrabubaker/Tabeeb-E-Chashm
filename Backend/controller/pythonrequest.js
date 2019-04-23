// Order = require('../models/order');
// // Product = require('../models/product')
// let json_body ={
//     'searched'
// }
const request = require('request')
Order = require('../models/order');
Product = require('../models/product')

exports.python_request = (req, res, next) => {
    let productsSearched =[]
    let productsOrdered=[]
    Product.find().then(product =>{
        product.forEach(element => {
            let categoryList =[]
            // console.log(element.ProductName)
            element.ProductSpecifications.Category.forEach(elem =>{
                categoryList.push(elem)
            })
            productsSearched.push({'productName':element.ProductName,'productCategory':categoryList})
        });
        // console.log(productsSearched)
        Order.find().then(order =>{
            order.forEach(element =>{
                element.Product.forEach(orderedProducts =>{
                    productsOrdered.push({'productName':orderedProducts,'productQuantity':'20'})
                })
            })
            // console.log(productsOrdered)
            let json_body={
                'productsSearched':productsSearched,
                'productsOrdered' :productsOrdered
            }
            request.post('http://192.168.43.2:5000/BI',{
                json:json_body
            },(error, response, res_body) => {
                if(error){
                    console.log(error)
                    return
                }
                console.log('status Code : '+response.statusCode)
                console.log('Response: ',response.body)
                res.json(res_body)
            })

        })
    })
    
};
