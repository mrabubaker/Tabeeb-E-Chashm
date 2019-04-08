var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./mongoose');
var user = require('./models/user');
var product = require('./models/product');
var discount = require('./models/discount');
var ad = require('./models/Ad');

var app = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.post('/user/register', (req, res) => {
    console.log(req.body);
    //mongoose object instance
    user.create(req.body).then(doc => {
        if(doc){
            res.send({
                status : 'OK'
            })
        }else{
            res.send({
                status:'failed'
            })
        }
    }).catch(e => {
        console.log(e);
    })
});

app.post('/deleteuser',(req, res) => {
 
    user.find({'_id':req.body.id}).remove().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    })
    
 });

app.post('/user/login', (req, res) => {
    console.log(req.body);

    user.findOne({
        email: req.body.email,
        password: req.body.password
    }).then(doc => {
        if(doc){
            res.send({
                status: 'OK'
            })
        }
        else
        {
            res.send({
                status: 'Mahzrat'
            })
        }
    })
});

app.post('/allUsers', (req, res) => {
    //mongoose object instance
    user.find({}).then(doc => {
        if(doc){
            res.send(doc)
            console.log(doc)
        }else{
            res.send({
                status:'failed'
            })
        }
    }).catch(e => {
        console.log(e);
    })
});

app.post('/product', (req, res) => {
    console.log(req.body);
    //mongoose object instance
    product.create(req.body).then(doc => {
        if(doc){
            res.send({
                status : 'OK'
            })
        }else{
            res.send({
                status:'failed'
            })
        }
    }).catch(e => {
        console.log(e);
    })
});

app.post('/deleteproduct',(req, res) => {
 
    product.find({'_id':req.body.id}).remove().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    })
    
 });

app.post('/allProducts', (req, res) => {
    console.log(req.body);

    
    product.find({
    
    }).then(doc => {
        if(doc){
            res.send(doc)
            console.log(doc)
        }else{
            res.send({
                status:'failed'
            })
        }
    }).catch(e => {
        console.log(e);
    })
    
});

app.post('/main/discount', (req, res) => {
    console.log(req.body);
    
    discount.create(req.body).then(doc => {
        if(doc){
            res.send({
                status : 'OK'
            })
        }else{
            res.send({
                status:'failed'
            })
        }
    }).catch(e => {
        console.log(e);
    })
});

app.post('/main/ad', (req, res) => {
    console.log(req.body)

    ad.create(req.body).then( doc => {
        if(doc){
            res.send({
                status : 'OK'
            })
        }
        else{
            res.send({
                status: 'failed'
            })
        }
    }).catch(e => {
        console.log(e);
    })
});

app.post('/AddtoCart',(req, res) => {
 
    product.find({'_id':req.body.id}).then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    })
    
 });

 app.post('/selectedproduct', (req, res) => {
    console.log(req.body.productid);

    
    product.findOne({'_id':req.body.productid
    
    }).then(doc => {
        if(doc){
            res.send(doc)
            console.log(doc)
        }else{
            res.send({
                status:'failed'
            })
        }
    }).catch(e => {
        console.log(e);
    })
    
});

app.post('/cart/product', (req, res) => {
    console.log(req.body)

    product.create(req.body).then( doc => {
        if(doc){
            res.send({
                status : 'OK'
            })
        }
        else{
            res.send({
                status: 'failed'
            })
        }
    }).catch(e => {
        console.log(e);
    })
});

app.post('/order', (req, res) => {
    console.log(req.body);
    //mongoose object instance
    product.create(req.body).then(doc => {
        if(doc){
            res.send({
                status : 'OK'
            })
        }else{
            res.send({
                status:'failed'
            })
        }
    }).catch(e => {
        console.log(e);
    })
});


app.listen(3000, () => {
    console.log('Server started on 3000')
})