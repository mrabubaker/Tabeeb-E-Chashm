var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Product = require('../models/product')
var CartSchema = new Schema({
	Product: [ {Product:Product, No_Of_Items: {type: Number, required: true}} ],
	DateAdded: { type: Date, default: Date.now }
});
const  Cart = mongoose.model('cart',CartSchema);

module.exports = Cart;