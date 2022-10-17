const SpotModel = require('../models/spotModel')
const UserModel = require('../models/userModel')

async function createSpot(req, res) {
    try {
        req.body.author = res.locals.user.id
        spot = await SpotModel.create(req.body)
        user = await UserModel.findById(res.locals.user.id)
        user.spot.push(spot.id)
        user.save()
        res.json(spot)
    } catch (error) {
        console.log(error)
    }
}

async function showOneSpot(req, res) {
    try {
        const spot = await SpotModel.findById(req.params.spotId, { __v: 0 })
            .populate('author', ['name', 'email'])
        res.json(spot)
    } catch (error) {
        console.log(error)
    }
}

async function showAllSpots(req, res) {
    try {
        userSpots = await UserModel.findById(res.locals.user.id).populate('spot')

        res.json(userSpots.spot)
    } catch (error) {
        console.log(error)
    }
}

async function deleteSpot(req, res) {
    try {
        const spot = await SpotModel.findById(req.params.spotId)
        if (spot.author != res.locals.user.id) { res.send("You haven´t rights to delete this spot") }
        else {
            const user = await UserModel.findById(res.locals.user.id)
            index = user.spot.indexOf(req.params.spotId)
            user.spot.splice(index, 1)
            user.save()
            const delSpot = await SpotModel.findByIdAndDelete(req.params.spotId)
            res.json(delSpot)
        }
    } catch (error) {
        console.log(error)
    }
}

async function updateSpot(req, res) {
    try {
        const spot = await SpotModel.findById(req.params.spotId)
        if (spot.author != res.locals.user.id) { res.send("You haven´t rights to modify this spot") }
        else {
            const updateSpot = await SpotModel.findByIdAndUpdate(req.params.spotId, req.body, { new: true })
            res.json(updateSpot)
        }
    } catch (error) {
        console.log(error)
    }
}

async function shareSpot(req, res) {
    try {
        const shareSpot = await SpotModel.findById(req.params.spotId, { __v: 0 })        
        shareSpot.sharedUsers.push(req.body.userId).save()  
        const user = await UserModel.findById(req.body.userId)
        user.sharedSpot.push(req.params.spotId).save()   
        res.json(shareSpot)
    } catch (error) {
        console.log(error)
    }
}

async function unShareSpot(req, res) {
    try {
        const unShareSpot = await SpotModel.findById(req.params.spotId, { __v: 0 })        
        unShareSpot.sharedUsers.filter((item) => item !== req.body.userId).save()
        const user = await UserModel.findById(req.body.userId)
        user.sharedSpot.filter((item) => item !== req.params.spotId).save()      
        res.json(unShareSpot)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createSpot,
    showOneSpot,
    showAllSpots,
    deleteSpot,
    updateSpot,
    shareSpot,
    unShareSpot
}