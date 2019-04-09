var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CartSchema = new Schema({
	Customer: {type: mongoose.Schema.Types.ObjectId, ref: "customer"},
	Product: [ 
		{
			Product: {type: mongoose.Schema.Types.ObjectId, ref: "product"}, 
			No_Of_Items: {type: Number, required: true}
		} 
	],
	DateAdded: { type: Date, default: Date.now }
});

const  Cart = mongoose.model('cart',CartSchema);
module.exports = {Cart};

//module.exports = CartSchema;