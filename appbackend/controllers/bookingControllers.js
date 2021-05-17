const mongoose = require("mongoose");
const Voucher = mongoose.model("Voucher");
const User = mongoose.model("User");
const Booking = mongoose.model("Userbooking");

const makeBooking = async (req,res) =>{
    var date = new Date()
    const newbooking = new Booking({
        user_email : req.body.email,
        date: date.toLocaleString().toString(),
        service_type: req.body.service
    })                    
}

const getBookings = async (req,res) =>{
    const allbookings = await Booking.find({user_email: req.params.email}).lean()
    res.json(allbookings)
}

module.exports = {makeBooking, getBookings}