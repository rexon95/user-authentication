const jwt = require('jsonwebtoken')
// const usersController = require('../Controllers/usersController')
const User = require('../Models/User')

const authenticateUser = (req, res, next) => {
   const token = req.header('Authorization')
    let tokenData
    try{
        tokenData = jwt.verify(token, 'rex123key')
        User.findById(tokenData._id)
           .then((user)=>{
              req.user = user
              next()
           })
           .catch((err)=>{
               res.json(err)
           })
    }catch(e){
        res.json(e.message)
    }
}

module.exports = {
    authenticateUser
}