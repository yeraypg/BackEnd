const mongoose = require('mongoose')
const ExampleModel = require('./exampleModel')

const flopSchema = new mongoose.Schema({

    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'spot'
    },
    tittleFlop: {
        type: String,
        require: true
    },
    image: [{
        type: String
    }],
    theory: {
        type: String
    },
    exploit: {
        type: String
    },
    audio: {
        type: String
    },
    examples: [exampleSchema]
},
    {
        timestamps: {
            createdAt: true,
            updatedAt: false
        }
    })

const FlopModel = mongoose.model('flop', flopSchema)

module.exports = FlopModel

