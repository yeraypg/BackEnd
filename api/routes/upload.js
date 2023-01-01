const router = require('express').Router()

const {
    checkAuth,    
    uploadImage,
    uploadAudio,
    upCloudImage,
    upCloudAudio,
} = require('../utils')

router

    .post('/image', checkAuth, uploadImage, upCloudImage)
    .post('/audio', checkAuth, uploadAudio, upCloudAudio)

module.exports = router
