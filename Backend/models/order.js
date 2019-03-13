const mongoose = require("mongoose")
const Schema = mongoose.Schema

const OrderSchema = new Schema({
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
    orderid: {
        type: String,
    }

})

module.exports = order = mongoose.model('orders', OrderSchema)

