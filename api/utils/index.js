const jwt = require('jsonwebtoken')
const UserModel = require('../models/userModel')

function checkAuth(req, res, next) {
    try {
      if (!req.headers.token) {
        res.status(403).send(`Token not found`);
      } else {
        jwt.verify(req.headers.token, process.env.SECRET, async (err, token) => {
          if (err) {
            res.status(403).send("Token not valid");
          }
          const user = await UserModel.findOne({ email: token.email })
          res.locals.user = user
          next();
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  function checkRolUser(req, res, next) {
    if (res.locals.user.rol !== 'User' && res.locals.user.rol !== 'Admin' ) {
        return res.send('User not authorized')
    }
    return next();
}

function checkRolStudent(req, res, next) {
  if (res.locals.user.rol !== 'Student') {
      return res.send('User not authorized')
  }
  return next();
}

  function checkRolCoach(req, res, next) {
      if (res.locals.user.rol !== 'Coach') {
          return res.send('User not authorized')
      }
      return next();
  }

  function checkRolAdmin(req, res, next) {
    if (res.locals.user.rol !== 'Admin') {
        return res.send('User not authorized')
    }
    return next();
}
 
  module.exports = { 
    checkAuth, 
    checkRolUser,
    checkRolStudent, 
    checkRolCoach, 
    checkRolAdmin 
  }