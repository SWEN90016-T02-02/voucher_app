const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.post('/signin', function(req, res){
    var email = req.body.email
    var password = req.body.password

    User.findOne({email: email, password: password}, function(err, user){
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

module.exports = router