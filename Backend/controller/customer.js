Customer = require('../models/customer')

exports.customer_get_customer = (req, res, next) => {

    console.log('Get Customer for Login')
    Customer.find(function(err, customer){
        if (err) return function(){
            console.log("error");
        };
        res.json(customer)
    })};
    
exports.customer_login_customer=(req, res, next) =>{
    Customer.find({'Email':req.body.Email,'Password':req.body.Password},function(err, customer){
        if(err){
            res.json({
                'message': 'mahzrat'})
        }else{
            res.json({
                'message':'login_successful'
            })
        }  
    })
}
exports.customer_add_new_customer = (req, res, next) => {
    
    console.log('Create new Customer')
    
    Customer.create(req.body).then(function(customer){
        console.log(customer)
        res.end()
    })};
