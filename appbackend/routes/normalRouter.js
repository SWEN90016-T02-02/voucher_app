const express = require('express')
const userRouter = express.Router()
const userSchemaCopy = require('../models/user')
// const userController = require('../controllers/userControllers.js')

// Run this function when user click sign up
// A post request is sent
userRouter.post('/signup', (request, response) =>{
    const signedUpUser = new userSchemaCopy({
        first_name:request.body.firstName,
        last_name:request.body.lastName,
        phone_number:request.body.phone_number,
        user_id:request.body.user_id,
        email_address:request.body.email,
        password:request.body.password

    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

// userRouter.get('/users', userController.getUsers)

module.exports = userRouter