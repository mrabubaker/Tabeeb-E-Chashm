const mongoose = require("mongoose")
const Schema = mongoose.Schema

const AdSchema = new Schema({

    AdTitle: {
        type: String,
    },
    StartTime: {
        type: Date,
        default: Date.now
    },
    EndTime: {
        type: Date,
    },
    Poster: {
        type: String,
        default: null
    }

})

module.exports = Ad = mongoose.model('Ads', AdSchema)
