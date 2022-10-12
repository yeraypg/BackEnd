const router = require('express').Router()

const {
    checkAuth,
    checkRolAdmin
} = require('../utils')

const {
    createUser,
    login,
    getUserById,
    getAllUsers,
    userProfile,
    updateUserProfile,
    updateUserById,
    deleteUserById,
    upImage,
    upAudio,

} = require('../controllers/userController')

router
    .post('/signup', createUser)
    .post('/login', login)

    .get('/profile', checkAuth, userProfile)
    .get('/', checkAuth, checkRolAdmin, getAllUsers)
    .get('/:id', checkAuth, checkRolAdmin, getUserById)

    .put('/profile', checkAuth, updateUserProfile)
    .put('/:id', checkAuth, checkRolAdmin, updateUserById)

    .delete('/:id', checkAuth, checkRolAdmin, deleteUserById)


/*   .post('/uploadImage', upImage)
  .post('/uploadAudio', upAudio) */
module.exports = router
