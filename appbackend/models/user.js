const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name : {type: String,  required: true},
    phone_number : {type: String,  required: true},
    user_id : {type: Number, min : 0, required: true},
    email: {type: String,  required: true},
    password: {type: String,  required: true},   
})

const User = mongoose.model('User', userSchema)
module.exports = User