const express = require('express')
const bookingRouter = express.Router()
const bookingController = require('../controllers/bookingControllers.js')


bookingRouter.post('/makebooking', bookingController.makeBooking)
bookingRouter.post('/getbooking/:email', bookingController.getBookings)

module.exports = bookingRouter