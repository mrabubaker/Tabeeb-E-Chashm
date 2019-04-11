const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

//set up express app
const app = express();

//connect to monogdb
 mongoose.connect('mongodb://localhost/Chashm');
//CONTAINER-NAME:port
mongoose.Promise = global.Promise;


app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Added by academind tutorial#3 for accessing it from diffenent server.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
  }
  next();
});

app.use('/products',require('./routes/product'));
app.use('/customers',require('./routes/customer'));


module.exports = app;