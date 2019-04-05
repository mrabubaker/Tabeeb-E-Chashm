var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSpecificationSchema = new Schema({
	Shape: { type: String, required: true},
	Style: { type: String, required: true},
	Rim: { type: String, required: true},
	Gender: { type: String, required: true},
	Material: { type: String, required: true},
	Category: { type: String, required: true},
});


const  ProductSpecification = mongoose.model('productSpecification',ProductSpecificationSchema);

module.exports = ProductSpecification;