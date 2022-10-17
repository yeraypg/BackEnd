const ExampleModel = require('../models/exampleModel')

async function createExample(req, res) {
  try {
    const example = await ExampleModel.create(req.body)
    res.json(example)
  } catch (error) {
    console.log(error)
  }
}

async function showOneExample(req, res) {
  try {
    const specificExample = await ExampleModel.findById(req.params.exampleId)
    res.json(specificExample)
  } catch (error) {
    console.log(error)
  }
}

async function showAllExamples(req, res) {
  try {
    const examples = await ExampleModel.find()
    res.json(examples)
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
    const updatedExample = await ExampleModel.findByIdAndUpdate(req.params.exampleId, req.body.params, { new : true } )
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
