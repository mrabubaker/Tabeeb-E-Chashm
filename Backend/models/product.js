const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var RatingSchema = new Schema({
	Customer: {type: mongoose.Schema.Types.ObjectId, ref: "customer"},
	RatingValue: { type: Number}
});
var ReviewSchema = new Schema({
	Customer: {type: mongoose.Schema.Types.ObjectId, ref: "customer"},
	Review_Comment: { type: String},
	Review_Date: { type: Date, default: Date.now },
});

var ProductSchema = new Schema({
	ProductName:{type:String,required: true},
	Description: { type: String, required: true},
	Ratings: [ RatingSchema ],
	Reviews: [ ReviewSchema ],
	ProductSpecifications: {
		Category: [{type: String, required: true}],
		Shape: { type: String, required: true},
		Style: { type: String, required: true},
		Rim: { type: String, required: true},
		Gender: { type: String, required: true},
		Material: { type: String, required: true},
		TempleSize: { type: String, required: true},
		BridgeSize: { type: String, required: true},
		EyeSize: { type: String, required: true},
		Color: [{ type: String, required: true}]
	},
	ProductPhoto: { type: String, required: true},
	AllPhotos: [{type: String, required: true}],
	Quantity: { type: Number, required: true},
	Price: { type: Number, required: true },
	TAG: [{type: String}]
});



const  Product = mongoose.model('product',ProductSchema);

module.exports = Product;