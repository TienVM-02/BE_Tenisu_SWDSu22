const express = require('express')
const bookingRoute = express.Router()
const {insertBooking, getBooking, updateBooking, checkExistTime, cancelBooking} = require('../controller/booking_controller')

bookingRoute.post('/insert', insertBooking)
bookingRoute.post('/', getBooking)
bookingRoute.post('/update', updateBooking)
bookingRoute.post('/checkavailable', checkExistTime)
bookingRoute.post('/cancel', cancelBooking)

module.exports = {
    bookingRoute
}