const router = require('express').Router()

const {
  checkAuth,
  checkRolAdmin,
} = require('../utils')

const {
    showAllExamples,
    showOneExample,
    createExample,
    updateExample,
    deleteExample,
} = require('../controllers/exampleController')

router

.post('/', checkAuth, createExmple)

.get('/:exampleId', checkAuth, showOneExample)
.get('/', checkAuth, showAllExamples)

.put('/:exampleId', checkAuth, updateExample)

.delete('/:exampleId', checkAuth, deleteExample)


module.exports = router