const router = require('express').Router()

const {
    checkAuth,
    checkRolAdmin,
} = require('../utils')

const {
    createSpot,
    showAllUserSpots,
    showSpot,
    showAllSpots,
    updateSpot,
    shareSpot,
    deleteSpot,

} = require('../controllers/spotController')

router
    .post('/', checkAuth, createSpot)
  

    .get('/', checkAuth, showAllUserSpots)
    .get('/:spotId', checkAuth, showSpot)
    .get('/', checkAuth, checkRolAdmin, showAllSpots)
   

    .put('/:spotId', checkAuth, updateSpot)
    
    .put('/:spotId/sharedUsers', checkAuth, shareSpot)

    .delete('/:spotId', checkAuth, deleteSpot)
 
module.exports = router
