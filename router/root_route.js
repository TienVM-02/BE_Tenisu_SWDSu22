const express = require('express')
const rootRoute = express.Router()

const {courtRoute} = require('./court_route.js')
const {authRoute} = require('./auth_route')
const {profileRoute} = require('./profile_route')
const {bookingRoute} = require('./booking_route')

rootRoute.use('/court', courtRoute)
rootRoute.use('/auth', authRoute)
rootRoute.use('/profile', profileRoute)
rootRoute.use('/booking', bookingRoute)


module.exports = {
    rootRoute
}