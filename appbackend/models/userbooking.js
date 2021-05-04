const mongoose = require("mongoose");

const userbookingSchema = new mongoose.Schema({
    user_id : {type: Number, min : 0, required: true},
    date: {type: String,  required: true},
    service_type: {type: String,  required: true},   
})

const Booking = mongoose.model('Userbooking', userbookingSchema)
module.exports = Booking