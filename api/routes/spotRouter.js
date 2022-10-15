const router = require('express').Router()

const {
    checkAuth,
    checkRolAdmin,
} = require('../utils')

const {
    createSpot,
    showOneSpot,
    showAllSpots,
    deleteSpot,
    updateSpot,
    shareSpot,

} = require('../controllers/spotController')

router
    .post('/', checkAuth, createSpot)

    .get('/:spotId', checkAuth, showOneSpot)
    .get('/', checkAuth, showAllSpots)

    .put('/:spotId', checkAuth, updateSpot)

    .put('/:spotId/sharedUsers', checkAuth, shareSpot)

    .delete('/:spotId', checkAuth, deleteSpot)

module.exports = router
