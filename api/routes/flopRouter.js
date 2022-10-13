const router = require('express').Router()

const {
  checkAuth,
  checkRolAdmin,
} = require('../utils')

const {
  showAllUserFlops,
  showOneFlop,
  createFlop,
  updateFlop,
  deleteFlop,
} = require('../controllers/flopController')

router

.post('/:spotId/flop', checkAuth, createFlop)

.get('/:spotId/flops', checkAuth, showAllUserFlops)
.get('/:spotId/:flopId', checkAuth, showOneFlop)

.put('/:spotId/:flopId', checkAuth, updateFlop)

.delete('/:spotId/:flopId', checkAuth, deleteFlop)

module.exports = router