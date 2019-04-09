var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Name = new Schema({
	First_Name: { type: String, required: true},	
	Last_Name: { type: String, required: true},
});

var OpticalSpecificationSchema = new Schema({
	Cylinderical: { type: Number},
	Spherical: { type: Number},
	Axis: { type: Number},
	IPD: { type: Number},
});

var CustomerSchema = new Schema({
	Customer_Name: {type: String, required: true} ,
	Customer_Username: { type: String, required: true},	
	Password: { type: String, required: true},
	Email: { type: String, required: true},
	Phone: { type: Number},
	Optical_Specifications:  OpticalSpecificationSchema
});


const  Customer = mongoose.model('customer',CustomerSchema);
module.exports = {Customer};