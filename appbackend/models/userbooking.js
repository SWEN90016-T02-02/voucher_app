const mongoose = require("mongoose");

const userbookingSchema = new mongoose.Schema({
    user_email : {type: String, required: true},
    service_type: {type: String,  required: true,
        Enum : ["flowers",
        "chocolatebox",
        "teaparty",
        "cheeseplatter",
        "coffees10", 
        "breakfast",
        "lunch",
        "meatmeal",
        "fishmeal",
        "vegmeal",
        "bakerygoods",
        "hairstyle"]},
    method: {type: String,  required: true,
        Enum : ["local delivery to the MYD offices",
        "pick-up from the service"]},
    pickup_date:{type:Date,  required: true,},
    date: {type: String,  required: true},
    
})

const Booking = mongoose.model('Userbooking', userbookingSchema)
module.exports = Booking