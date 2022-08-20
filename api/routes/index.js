const router = require('express').Router()
const user = require('./userRouter')
const spot = require('./spotRouter')

router.use('/user', user)
router.use('/spot', spot)
module.exports = router