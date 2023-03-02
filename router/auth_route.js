const express = require('express')
const authRoute = express.Router()
const {signUp, signIn} = require('../controller/auth_controller')

authRoute.post('/signup', signUp)
authRoute.post('/signin', signIn)

module.exports = {
    authRoute
}