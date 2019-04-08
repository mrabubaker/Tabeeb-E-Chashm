var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Product = require('./product')

var Shipping_Address = new Schema({
	Street: { type: String, required: true},
	City: { type: String, required: true},
	Country: { type: String, required: true},
	Province: { type: String, required: true},
});
var OpticalSpecificationSchema = new Schema({
	Cylinderical: { type: Number, required: true},
	Spherical: { type: Number, required: true},
	Axis: { type: Number, required: true},
	IPD: { type: Number, required: true},
})

var OrderSchema = new Schema({
	Order_ID: { type: Schema.Types.ObjectId, required: true},
	Buyer_Username: { type: String, required: true},	
	Buyer_Category: { type: String, required: true},
	Product: [{ Product:Product, No_Of_Items: {type: Number, required: true} }],
	Order_Status : { type: String, required: true},
	Optical_Specifications:  OpticalSpecificationSchema ,
	// Payment_Details: [ Payment_Details ],
	Shipping_Address:  Shipping_Address ,
	Order_Date: { type: Date, default: Date.now },
	Shipped_Date: { type: Date }
});


const  Order = mongoose.model('order',OrderSchema);

module.exports = Order;