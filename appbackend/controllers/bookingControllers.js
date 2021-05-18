const mongoose = require("mongoose");
const Voucher = mongoose.model("Voucher");
const User = mongoose.model("User");
const Booking = mongoose.model("Userbooking");

const makeBooking = async (req,res) =>{
    var date = new Date()
    const newbooking = new Booking({
        user_email : req.body.user_email,
        phone_number:req.body.phone_number,
        service_type: req.body.service_type,
        method: req.body.method,
        pickup_date: req.body.pickup_date,
        date: date.toLocaleString().toString(),
    })       
    newbooking.save()
    return res.status(200).send({
        message:"Success"
    }
    )           
}

const getBookings = async (req,res) =>{
    const allbookings = await Booking.find({user_email: req.params.email}).lean()
    res.json(allbookings)
}

module.exports = {makeBooking, getBookings}