const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name : {type: String,  required: true},
    phone_number : {type: String,  required: true},
    user_id : {type: Number, min : 0, required: true},
    email: {type: String,  required: true},
    password: {type: String,  required: true},  
    point:{type: Number, required: true},
    isadmin: {type: Boolean, required: true},
    name_on_invice: {type: String, required:false},
    biller_email: {type: String, required:false},
})

const User = mongoose.model('User', userSchema)
module.exports = User