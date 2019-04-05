var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ReviewSchema = new Schema({
	Customer: [ Customer ],
	Review_Comment: { type: String, required: true},
	Review_Date: { type: Date, default: Date.now },
});


const  Review = mongoose.model('review',ReviewSchema);

module.exports = Review;