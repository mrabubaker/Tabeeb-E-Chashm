var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Product = require('./product')

var OrderSchema = new Schema({
	CustomerEmail: {
		type: string
	},
	Product: [{
		ProductName: {
			type: String
		},
		No_Of_Items: {
			type: Number
		}
	}],
	OrderStatus: {
		type: String
	},
	OpticalSpecifications: {
		Cylinderical: {
			"LeftEye": {
				type: Number
			},
			"RightEye": {
				type: Number
			}
		},
		Spherical: {
			"LeftEye": {
				type: Number
			},
			"RightEye": {
				type: Number
			}
		},
		Axis: {
			"LeftEye": {
				type: Number
			},
			"RightEye": {
				type: Number
			}
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