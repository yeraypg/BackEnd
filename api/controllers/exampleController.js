const SpotModel = require('../models/spotModel')


async function createExample(req, res) {
    try {
        const specificSpot = await SpotModel.findById(req.body.spotId)
        const specificFlop = specificSpot.flops.id(req.body.flopId)
        specificFlop.examples.push(req.body)
        specificSpot.save()
        res.json(specificFlop.examples)
    } catch (error) {
        console.log(error)
    }
}

async function showOneExample(req, res) {
    try {
        const specificSpot = await SpotModel.findById(req.body.spotId)
        const specificFlop = specificSpot.flops.id(req.body.flopId)
        const specificExample = specificFlop.examples.id(req.params.exampleId)
        res.json(specificExample)
    } catch (error) {
        console.log(error)
    }
}

async function showAllExamples(req, res) {
    try {
        const specificSpot = await SpotModel.findById(req.body.spotId)
        const specificFlop = specificSpot.flops.id(req.body.flopId)
        res.json(specificFlop.examples)
    } catch (error) {
        console.log(error)
    }
}

async function deleteExample(req, res) {
    try {
        const deletedExample = await ExampleModel.findByIdAndDelete(req.params.exampleId)
        res.json(deletedExample)
    } catch (error) {
        console.log(error)

    }
}

async function updateExample() {
    try {
        const updatedExample = await ExampleModel.findByIdAndUpdate(req.params.exampleId, req.body.params, { new: true })
        res.json(updatedExample)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createExample,
    showOneExample,
    showAllExamples,
    deleteExample,
    updateExample
}
