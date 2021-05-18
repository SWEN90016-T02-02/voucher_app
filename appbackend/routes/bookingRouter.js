const express = require('express')
const bookingRouter = express.Router()
const bookingController = require('../controllers/bookingControllers.js')


bookingRouter.post('/makebooking', bookingController.makeBooking)
bookingRouter.post('/getbooking/:email', bookingController.getBookings)

bookingRouter.get('/adminbooking',bookingController.adminView)

module.exports = bookingRouter