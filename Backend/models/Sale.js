const mongoose = require("mongoose")
const Schema = mongoose.Schema

const SaleSchema = new Schema({
    Product: [
        {
        productid: {
            type: String,
        },
        NumberofProduct: {
            type: String,
        }
    }
    ],
    usesrid: {
        type: String,
    },
    date: {
        default: DateNow
    },
    status: {
        type: boolean
    }
    
})

module.exports = sale = mongoose.model('sale', SaleSchema)

