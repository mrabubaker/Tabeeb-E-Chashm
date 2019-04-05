var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Cart = require('./cart')
var Order = require('./order')

var Name = new Schema({
	First_Name: { type: String, required: true},	
	Last_Name: { type: String, required: true},
});


var Optical_Specifications = new Schema({
	Cylinderical: { type: Float, required: true},
	Spherical: { type: Float, required: true},
	Axis: { type: Float, required: true},
	IPD: { type: Float, required: true},
})
var CustomerSchema = new Schema({
	Customer_Name: Name ,
	Customer_Username: { type: String, required: true},	
	Password: { type: String, required: true},
	Email: { type: String, required: true},
	Phone: { type: Long , required: true},
	Optical_Specifications: [ Optical_Specifications ],
	Virtual_TryOn_Photos: [ {Product:Product, Photo: {type: String, required: true} }],
	Wishlist: [ Product ],
	Cart: [ Cart ],
	OrderHistory: [ Order ] 
});
const  Customer = mongoose.model('customer',CustomerSchema);

module.exports = Customer