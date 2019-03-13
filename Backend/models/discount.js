const mongoose = require("mongoose")
const Schema = mongoose.Schema

const DiscountSchema = new Schema({

    DiscountTitle: {
        type: String,
    },
    Product: [
        {
            Productid: {
                type: String,
            },
            Productname: {
                type: String,
            },
            Description: {
                type: String,
            },
            Rating: {
                type: Number,
                default: 0
            },
            Review: {
                type: String,
                default: null
            },
            Specification: [
                {
                    shape : {
                        type: String,
                        default: null
                    },
                    style:{
                        type:String,
                        default: null
                    },
                    rim:{
                        type: String,
                        default: null
                    },
                    gender:{
                        type:String,
                        default: null
                    },
                    material:{
                        type:String,
                        default: null
                    },
                    category:{
                        type:String,
                        default: null
                    }
                }
            ],
            productPhoto :{
                type:String,
                default: null
            },
            '360DegreePhoto':{
                type:String,
                default: null
            },
            zoomPhoto:{
                type:String,
                default: null
            },
            noOfItems:{
                type:Number,
                default: null
            },
            price:{
                type:Number,
                default: null
            } 
        }
    ],

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
