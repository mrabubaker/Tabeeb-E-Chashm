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

    console.log("CLIENT REQUESTING LOGIN WITH CREDENTIALS: "+req.body.Email+" and "+req.body.Password)
    Customer.findOne({'Email':req.body.Email,'Password':req.body.Password}).then(doc => {
        if(doc){
            res.send({
                status: 'Login Successful'
            })
        }
        else
        {
            res.send({
                status: 'Email or Password is incorrect!'
            })
        }
    })
}

exports.customer_add_new_customer = (req, res, next) => {
    
    console.log('Create new Customer');
    console.log(req.body);

    //check if there isn't any account associated with the same email
    Customer.findOne({
        Email: req.body.Email
    }).then(customer => {
        if(!customer){
            Customer.create(req.body).then(status => {
                if(status){
                    res.send({status: 'OK'})
                }
            })
        }
        else{
            res.send({
                status: 'Error! There is an account already registered with this Email'
            })
        }
    }
   


    )};
