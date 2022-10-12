const jwt = require('jsonwebtoken')
const UserModel = require('../models/userModel')

async function checkAuth(req, res, next) {
    if (!req.headers.token) { res.status(403).send('No token found') }
    else {
        try {
            const decodedToken = jwt.verify(req.headers.token, process.env.SECRET)
            res.locals.user = await userModel.findOne({ email: decodedToken.email })
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
    if (res.locals.user.rol !== 'Coach') {
        return res.send('User not authorized')
    }
    return next();
}

module.exports = {
    checkAuth,
    checkRolAdmin,
}
