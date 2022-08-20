const mongoose = require('mongoose')

const exampleSchema = new mongoose.Schema({
    date: Date,
    text: {
        type: String
    },
    image: String
})

const flopSchema = new mongoose.Schema({

    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'spot'
    },
    name: {
        type: String,
        require: true
    },
    type: {
        type: String,
        enum: ['SRP','3BET','4BET','SQZ']
    },
    image: {
        type: String
    },
    theory: {
        type: String
    },
    exploit: {
        type: String
    },
    example: [exampleSchema]
})

const spotSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String,
        require: true
    },
    explain: {
        type: String
    },
    flop: [flopSchema]
})

const SpotModel = mongoose.model('spot', spotSchema)

module.exports = SpotModel