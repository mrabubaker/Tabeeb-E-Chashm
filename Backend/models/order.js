var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Product = require('./product')

var OrderSchema = new Schema({
	CustomerEmail: {
		type: String
	},
	Product: [{
			type: String
	}],
	OrderStatus: {
		type: String,
		default: "Ordered"
	},
	OrderTotalPrice: {
		type: Number
	},
	OpticalSpecifications: {

		"CylindericalLeft": {
			type: Number
		},
		"CylindericalRight": {
			type: Number
		},
		"SphericalLeft": {
			type: Number
		},
		"SphericalRight": {
			type: Number
		},
		"AxisLeft": {
			type: Number
		},
		"AxisRight": {
			type: Number
		},
		IPD: {
			type: Number
		}

	},
	// Payment_Details: [ Payment_Details ],
	Shipping_Address: {
		Building: {
			type: String
		},
		Street: {
			type: String
		},
		City: {
			type: String
		},
		Landmark: {
			type: String
		},
		Province: {
			type: String
		},
		PostalCode: {
			type: String
		},
		Phone: {
			type: String
		},
		AlternativePhone: {
			type: String
		}
	},
	OrderDate: {
		type: Date,
		default: Date.now
	},
	PackedDate: {
		type: Date
	},
	ShippedDate: {
		type: Date
	},
	DeliveredDate: {
		type: Date
	}
});



const Order = mongoose.model('order', OrderSchema);
module.exports = Order;