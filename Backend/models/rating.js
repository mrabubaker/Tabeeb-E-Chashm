var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var RatingSchema = new Schema({
	Customer: [ Customer ],
	No_of_Items: { type: Integer, required: true}
});

const  Rating = mongoose.model('rating',RatingSchema);

module.exports = Rating;