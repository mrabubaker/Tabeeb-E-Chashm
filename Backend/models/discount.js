const mongoose = require("mongoose")
const Schema = mongoose.Schema

const DiscountSchema = new Schema({

    DiscountTitle: {
        type: String,
    },
    
    Product:{type: mongoose.Schema.Types.ObjectId, ref: "product"},
    DiscountPercentage: {
        type: Number,
    },

    StartTime: {
        type: Date,
        default: Date.now
    },

    EndTime: {
        type: Date,
    }

})

module.exports = Discount = mongoose.model('discounts', DiscountSchema)
