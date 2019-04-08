var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OpticalSpecificationSchema = new Schema({
	Cylinderical: { type: Number, required: true},
	Spherical: { type: Number, required: true},
	Axis: { type: Number, required: true},
	IPD: { type: Number, required: true},
})

const  Optical_Specification = mongoose.model('optical_specification',OpticalSpecificationSchema);

module.exports = Optical_Specification;