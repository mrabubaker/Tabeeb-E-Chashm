var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CartSchema = new Schema({
	Product: [ {Product:Product, No_Of_Items: {type: Integer, required: true}} ],
	DateAdded: { type: date, default: date.now }
});
const  Cart = mongoose.model('cart',CartSchema);

module.exports = Cart;