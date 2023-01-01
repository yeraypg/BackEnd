const jwt = require('jsonwebtoken')
const fs = require('fs')
const UserModel = require('../models/userModel')
const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

async function checkAuth(req, res, next) {
    if (!req.headers.token) { res.status(403).send('No token found') }
    else {
        try {
            const decodedToken = jwt.verify(req.headers.token, process.env.SECRET)
            res.locals.user = await UserModel.findOne({ email: decodedToken.email })
            next()
        } catch (error) {
            console.log(error)
            res.status(403).send(`Token not valid: ${error}`)
        }
    }
}

function checkRolAdmin(req, res, next) {
    if (res.locals.user.rol !== 'Admin') {
        return res.status(403).send('User not authorized')
    }
    return next();
}

function checkRolCoach(req, res, next) {
    if (res.locals.user.rol !== 'Coach' && res.locals.user.rol !== 'Admin') {
        return res.send('User not authorized')
    }
    return next();
}

async function uploadImage(req, res, next) {
    try {
        const uploadImageFile = await req.files.imageFile        
        uploadImageFile.mv(`./api/uploads/${uploadImageFilie.name}`,err => {    
            if(err) return res.status(500).send({ message : err })  
            })
            res.locals.imageFile = uploadImageFile.name    
        return next();
    } catch (error) {
        console.log(error)
    }
}

async function uploadAudio(req, res, next) {
    try {
        const uploadAudioFile = await req.files.audioFile        
        uploadAudioFile.mv(`./api/uploads/${uploadAudioFile.name}`,err => {    
            if(err) return res.status(500).send({ message : err })            
            })
        res.locals.audioFile = uploadAudioFile.name      
        return next();
    } catch (error) {
        console.log(error)
    }
}

async function upCloudAudio(req, res) {
    try {
        const uploadAudio = await cloudinary.uploader.upload(`./api/uploads/${res.locals.audioFile}`, { resource_type: "raw" })
        if (uploadAudio) {
            try {
                fs.unlinkSync(`./api/uploads/${res.locals.audioFile}`)
            } catch(err) {
            console.error('Something wrong happened removing the file', err)
          }
        }        
        res.json(uploadAudio.url)
    } catch (error) {
        console.log(error)
    }
}

async function upCloudImage(req, res) {
    try {        
        const uploadImage = await cloudinary.uploader.upload(`./api/uploads/file.${res.locals.imageFile}`)
        if (uploadImage) {
            try {
                fs.unlinkSync(`./api/uploads/file.${res.locals.imageFile}`)
            } catch(err) {
            console.error('Something wrong happened removing the file', err)
          }
        }        
        res.json(uploadImage.url)

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    checkAuth,
    checkRolCoach,
    checkRolAdmin,
    uploadImage,
    uploadAudio,
    upCloudAudio,
    upCloudImage,
}
