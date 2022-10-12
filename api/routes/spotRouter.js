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
    showAllUserFlops,
    showOneFlop,
    updateSpot,
    createFlop,
    updateFlop,
    deleteFlop,
    shareSpot,
    deleteSpot,

} = require('../controllers/spotController')

router
    .post('/', checkAuth, createSpot)
    .post('/:spotId/flop', checkAuth, createFlop)

    .get('/', checkAuth, showAllUserSpots)
    .get('/:spotId', checkAuth, showSpot)
    .get('/', checkAuth, checkRolAdmin, showAllSpots)
    .get('/:spotId/flops', checkAuth, showAllUserFlops)
    .get('/:spotId/:flopId', checkAuth, showOneFlop)

    .put('/:spotId', checkAuth, updateSpot)
    .put('/:spotId/:flopId', checkAuth, updateFlop)
    .put('/:spotId/sharedUsers', checkAuth, shareSpot)

    .delete('/:spotId', checkAuth, deleteSpot)
    .delete('/:spotId/:flopId', checkAuth, deleteFlop)
module.exports = router
