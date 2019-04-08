const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

//set up express app
const app = express();

//connect to monogdb
 mongoose.connect('mongodb://localhost/Chashm');
// mongoose.connect('mongodb://mongo/Honssh');
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
// app.use('/agent',require('./routes/agents'));
// app.use('/session',require('./routes/sessions'));
// app.use('/sensor',require('./routes/sensors'));
// app.use('/attackorigin', require('./routes/attack_origins'))

//error handling by acedemind
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });
  
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;