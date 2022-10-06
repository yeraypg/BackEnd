const mongoose = require('mongoose')
const FlopModel = require('../models/flopModel')

const spotSchema = new mongoose.Schema({

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    tittleSpot: {
        type: String,
        require: true
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
})

const SpotModel = mongoose.model('spot', spotSchema)

module.exports = SpotModel

