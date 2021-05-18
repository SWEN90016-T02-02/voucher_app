const mongoose = require("mongoose");
const Voucher = mongoose.model("Voucher");
const User = mongoose.model("User");
const Booking = mongoose.model("Userbooking");

const makeBooking = async (req,res) =>{
    var date = new Date()
    const newbooking = new Booking({
        user_email : req.body.email,
        service_type: req.body.service,
        method: req.body.method,
        pickup_date: req.body.pickup_date,
        date: date.toLocaleString().toString(),
    })       
    newbooking.save()             
}

const getBookings = async (req,res) =>{
    const allbookings = await Booking.find({user_email: req.params.email}).lean()
    res.json(allbookings)
}

module.exports = {makeBooking, getBookings}