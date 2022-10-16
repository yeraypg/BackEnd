const FlopModel = require('../models/spotModel')
const SpotModel = require('../models/spotModel')

async function createFlop(req, res) {
    try {
      const spot = await SpotModel.findById(req.body.spot)
        spot.flops.push(req.body)
        spot.save()
      res.json(spot)
  } catch (error) {
    console.log(error)
  }
}

async function showOneFlop(req, res) {
    try {
        const spot = await SpotModel.findById(req.body.spotId, { __v: 0 })
        const flop = spot.flops.find(e => e._id == req.params.flopId)
        res.json(flop)
    } catch (error) {
        console.log(error)
    }
}

async function showAllFlops(req, res) {
    try {
        const spot = await SpotModel.findById(req.body.spotId, { __v: 0 })
        res.json(spot.flops)
    } catch (error) {
        console.log(error)
    }
}

async function deleteFlop(req, res) {
     try {
         const delSpot = await SpotModel.findById(req.body.spot, { __v: 0 })
         const index = delSpot.flops.findIndex(e => e._id == req.params.flopId)
         delSpot.flops.splice(index, 1)
         delSpot.save()
         res.json(delSpot)
    } catch (error) {
        console.log(error)
    }
}

async function updateFlop(req, res) {
    try {
         const spot = await SpotModel.findById(req.body.spot, { __v: 0 })
        const index = spot.flops.findIndex(e => e._id == req.params.flopId)
        spot.flops[index] = req.body
        spot.save()
         res.json(spot)
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
