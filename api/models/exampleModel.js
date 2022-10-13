const mongoose = require('mongoose')

const exampleSchema = new mongoose.Schema({
    date: Date,
    text: {
        type: String
    },
    imageBoard: {
        type: String
    },
    imageHand: {
        type: String
    },
    audio: {
        type: String
    }
},
    {
        timestamps: {
            createdAt: true,
            updatedAt: false
        }
    })

const ExampleModel = mongoose.model('example', exampleSchema)

module.exports = ExampleModel
