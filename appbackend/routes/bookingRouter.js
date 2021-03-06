const express = require('express')
const bookingRouter = express.Router()
const bookingController = require('../controllers/bookingControllers.js')


bookingRouter.post('/makebooking', bookingController.makeBooking)
bookingRouter.post('/cancelbooking', bookingController.cancelBooking)
bookingRouter.post('/getbooking/:email', bookingController.getBookings)
bookingRouter.post('/getuserbooking', bookingController.getSingleUserBookings)

bookingRouter.get('/adminbooking',bookingController.adminView)

// accept or reject booking
bookingRouter.post('/acceptbooking',bookingController.acceptBooking)
bookingRouter.post('/rejectbooking',bookingController.rejectBooking)

module.exports = bookingRouter