const FlopModel = require('../models/spotModel')

async function createFlop(req, res) {
    try {
      flop = await FlopModel.create(req.body)
      res.json(flop)
  } catch (error) {
    console.log(error)
  }
}

async function showOneFlop(req, res) {
    try {
        const flop = await FlopModel.findById(req.params.flopId, { __v: 0 })
            .populate('flop', ['titleFlop'])
        res.json(flop)
    } catch (error) {
        console.log(error)
    }
}

async function showAllFlops(req, res) {
    try {
        const flops = await FlopModel.find({ __v: 0 })
            .populate('flop', ['titleFlop'])
        res.json(flops)
    } catch (error) {
        console.log(error)
    }
}

async function deleteFlop(req, res) {
     try {
         const delFlop = await FlopModel.findByIdAndDelete(req.params.flopId, req.body)
         res.json(delFlop)
    } catch (error) {
        console.log(error)
    }
}

async function updateFlop(req, res) {
     try {
         const updaFlop = await FlopModel.findByIdAndUpdate(res.locals.flop.id, req.body, { new: true })
         res.json(updaFlop)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createFlop,
    showOneFlop,
    showAllFlops,
    deleteFlop,
    updateFlop,
}
