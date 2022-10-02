const router = require('express').Router()

const { 
    checkAuth, 
    checkRolUser, 
    checkRolStudent,
    checkRolCoach, 
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
.post('/uploadImage', upImage)
.post('/uploadAudio', upAudio)

.get('/', checkAuth, checkRolAdmin, getAllUsers)
.get('/profile', checkAuth, userProfile)
.get('/:id', checkAuth, checkRolAdmin, getUserById)

.put('/profile', checkAuth, updateUserProfile)
.put('/:id', checkAuth, checkRolAdmin, updateUserById)

.delete('/:id', checkAuth, checkRolAdmin, deleteUserById)


module.exports = router