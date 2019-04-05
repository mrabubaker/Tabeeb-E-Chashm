const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var Customer =require('./customer')
var RatingSchema = new Schema({
	Customer: Customer,
	No_of_Items: { type: Integer, required: true}
});
var ReviewSchema = new Schema({
	Customer: Customer,
	Review_Comment: { type: String, required: true},
	Review_Date: { type: Date, default: Date.now },
});

var ProductSchema = new Schema({
	Product_ID: { type: ObjectID, required: true},
	Description: { type: String, required: true},
	Ratings: [ RatingSchema ],
	Reviews: [ ReviewSchema ],
	Product_Specifications: {
		Shape: { type: String, required: true},
		Style: { type: String, required: true},
		Rim: { type: String, required: true},
		Gender: { type: String, required: true},
		Material: { type: String, required: true},
		Category: { type: String, required: true},
	},
	Product_Photo: { type: String, required: true},
	three60Degree_Photos: { type: String, required: true},
	Zoom_Photo: { type: String, required: true},
	No_of_Items: { type: Integer, required: true},
	Price: { type: int, required: true }
});



const  Product = mongoose.model('product',ProductSchema);

module.exports = Product;