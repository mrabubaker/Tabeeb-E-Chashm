var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Product = require('./product')

var OrderSchema = new Schema({
	Order_ID: { type: Schema.Types.ObjectId, required: true},
	CustomerID: { type: mongoose.Schema.Types.ObjectId, ref: "customer"},
	Product: [
		{ 
			Product: { type: mongoose.Schema.Types.ObjectId, ref:"product" }, 
			No_Of_Items: {type: Number, required: true} 
		}
	],
	Order_Status : { type: String},
	Optical_Specifications:  OpticalSpecificationSchema ,
	// Payment_Details: [ Payment_Details ],
	Shipping_Address:  Shipping_Address ,
	OrderDate: { type: Date, default: Date.now },
	ShippedDate: { type: Date },
	DeliveredDate: {type: Date}
});

var Shipping_Address = new Schema({
	House: { type:String, required: true},
	Street: { type: String, required: true},
	Landmark: {type: String},
	City: { type: String, required: true},
	PostalCode : { type: String},
	Province: { type: String, required: true},

});
var OpticalSpecificationSchema = new Schema({
	Cylinderical: { type: Number, required: true},
	Spherical: { type: Number, required: true},
	Axis: { type: Number, required: true},
	IPD: { type: Number, required: true},
})


const  Order = mongoose.model('order',OrderSchema);
module.exports = Order;