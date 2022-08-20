const router = require('express').Router()

const { 
    checkAuth, 
    checkRolUser, 
    checkRolStudent,
    checkRolCoach, 
    checkRolAdmin,
} = require('../utils')

const {
    createSpot,
    showAllSpots,
    showSpot,    
    deleteSpot,
    upImage,
    createFlop,
    showFlop,

} = require('../controllers/spotController')

router
.post('/', checkAuth, checkRolUser, createSpot)
.post('/upload', checkAuth, checkRolUser, upImage)

.put('/flop/:spotId', checkAuth, checkRolUser, createFlop)

.get('/', checkAuth, checkRolAdmin, showAllSpots)
.get('/:spotId', checkAuth, checkRolUser, showSpot)
.get('/flop/:spotId', checkAuth, checkRolUser, showFlop)
.delete('/:spotId', checkAuth, checkRolUser, deleteSpot)



module.exports = router