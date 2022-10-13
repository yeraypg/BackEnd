const mongoose = require('mongoose')
const FlopModel = require('./flopModel')

const spotSchema = new mongoose.Schema({

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    tittleSpot: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true,
        enum: ['SRP', '3BET', '4BET']
    },
    theory: {
        type: String
    },
    exploit: {
        type: String,
    },
    audio: {
        type: String,
    },
    flops: [flopSchema],
    sharedUsers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }]
},
    {
        timestamps: {
            createdAt: true,
            updatedAt: false
        }
    }
)

const SpotModel = mongoose.model('spot', spotSchema)

module.exports = SpotModel

