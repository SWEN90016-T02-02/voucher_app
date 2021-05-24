const express = require('express')
const userRouter = express.Router()
const User = require('../models/user')
// const userController = require('../controllers/userControllers.js')


// Run this function when user click sign up
// A post request is sent
userRouter.post('/signup', (request, response) =>{
    const signedUpUser = new User({
        first_name:request.body.first_name,
        last_name:request.body.last_name,
        phone_number:request.body.phone_number,
        user_id:request.body.user_id,
        email:request.body.email,
        password:request.body.password,
        point: 0,
        isadmin: false
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})


userRouter.post('/changepassword', (req, res)=>{
    User.findOneAndUpdate({password:req.body.password}, {$set:{password:req.body.new_password}}, function(err, user){
        if(err){
            console.log(err)
            return res.status(500).send({
                message:"Something wrong"
            })
        }

        if(!user){
            return res.status(404).send({
                message:"User not found"
            })
        }

        return res.status(200).json(user)
        
    })

})

// userRouter.get('/users', userController.getUsers)

module.exports = userRouter