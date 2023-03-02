const express = require('express')
const profileRoute = express.Router()
const {insertProfile, updateProfile, getProfile} = require('../controller/profile_controller')

profileRoute.post('/insert', insertProfile)
profileRoute.post('/update', updateProfile)
profileRoute.post('/', getProfile)

module.exports = {
    profileRoute
}