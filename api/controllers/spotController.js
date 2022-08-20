const SpotModel = require('../models/spotModel')

async function createSpot(req, res) {
    try {
        req.body.user = res.locals.user.id
        spot = await SpotModel.create(req.body)
        res.json(spot)
    } catch (error) {
        console.log(error)
    }
}

async function showAllSpots(req, res) {
    try {
        const spots = await SpotModel.find({ __v: 0 })
            .populate('user', ['name'])
        res.json(spots)
    } catch (error) {
        console.log(error)
    }
}

async function showSpot(req, res) {
    try {
        const spot = await SpotModel.findById(req.params.spotId, { __v: 0 })
            .populate('flop', ['name'])
        res.json(spot)
    } catch (error) {
        console.log(error)
    }
}

async function deleteSpot(req, res) {
    try {
        const delSpot = await SpotModel.findByIdAndDelete(req.params.spotId, req.body)
        res.json(delSpot)
    } catch (error) {
        console.log(error)
    }
}

async function upImage(req, res) {
    try {
        const uploadResult = await cloudinary.uploader.upload(req.body.image)
        res.json(uploadResult.url)

    } catch (error) {
        console.log(error)
    }
}

async function createFlop(req, res) {
    try {
        const spot = await SpotModel.findById(req.params.spotId, { __v: 0 })
        req.body.spot = req.params.spotId;
        console.log(req.body)
        spot.flop.push(req.body)
        spot.save()
        res.json(spot)
    } catch (error) {
        console.log(error)
    }
}

async function showFlop(req, res) {
    try {
        const spot = await SpotModel.findById(req.params.spotId, { __v: 0 }).populate('flop')
        flop = spot.flop.filter(e => e._id == req.body.flopId)
        res.json(flop[0])
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createSpot,
    showAllSpots,
    showSpot,
    deleteSpot,
    upImage,
    createFlop,
    showFlop,
}