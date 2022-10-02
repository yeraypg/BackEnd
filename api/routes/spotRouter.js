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
    createFlop,
    showFlop,

} = require('../controllers/spotController')

router
.post('/', checkAuth, checkRolUser, createSpot)


.put('/flop/:spotId', checkAuth, checkRolUser, createFlop)

.get('/', checkAuth, checkRolAdmin, showAllSpots)
.get('/:spotId', checkAuth, checkRolUser, showSpot)
.get('/flop/:spotId', checkAuth, checkRolUser, showFlop)
.delete('/:spotId', checkAuth, checkRolUser, deleteSpot)



module.exports = router