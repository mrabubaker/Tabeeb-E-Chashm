var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CustomerSchema = new Schema({
	CustomerName: {type: String, required: true} ,
	Password: { type: String, required: true},
	Email: { type: String, required: true},
	OpticalSpecifications:  {
		Cylinderical: { 
			"LeftEye":{type: Number},
			"RightEye":{type: Number}
		},
		Spherical: {
			"LeftEye":{type: Number},
			"RightEye":{type: Number}
		},
		Axis: {
			"LeftEye":{type: Number},
			"RightEye":{type: Number}
		},
		IPD: { type: Number}
	},
	Wishlist : [{type: String}],
	Cart: [{type: String}],
	
	Address: {
		Building: {type: String},
		Street: {type: String},
		City: {type: String},
		Landmark: {type: String},
		Province: {type: String},
		PostalCode: {type: String},
		Phone: {type: String},
		AlternativePhone: { type: String}
	}
});


const  Customer = mongoose.model('customer',CustomerSchema);
module.exports = Customer;