var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
	Order_ID: { type: ObjectID, required: true},
	Buyer_Username: { type: String, required: true},	
	Buyer_Category: { type: String, required: true},
	Product: [{ Product:ProductObject, No_Of_Items: {type: Integer, required: true} }],
	Order_Status : { type: String, required: true},
	Optical_Specifications: [ Optical_Specifications ],
	Payment_Details: [ Payment_Details ],
	Shipping_Address: [ Shipping_Address ],
	Order_Date: { type: date, default: date.now },
	Shipped_Date: { type: date }
});


const  Order = mongoose.model('order',OrderSchema);

module.exports =Order;