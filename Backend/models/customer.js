var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Name = new Schema({
	First_Name: { type: String, required: true},	
	Last_Name: { type: String, required: true},
});

var OpticalSpecificationSchema = new Schema({
	Cylinderical: { type: Number, required: true},
	Spherical: { type: Number, required: true},
	Axis: { type: Number, required: true},
	IPD: { type: Number, required: true},
});

var CustomerSchema = new Schema({
	Customer_Name: Name ,
	Customer_Username: { type: String, required: true},	
	Password: { type: String, required: true},
	Email: { type: String, required: true},
	Phone: { type: Number},
	Optical_Specifications:  OpticalSpecificationSchema
});
const  Customer = mongoose.model('customer',CustomerSchema);

module.exports = Customer