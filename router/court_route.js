const express = require('express')
const courtRoute = express.Router()
const {getAllCourt, insertCourt, updateCourtById, deleteCourtById, findCourtByName} = require('../controller/court_controller')

courtRoute.get('/', getAllCourt)
courtRoute.post('/', insertCourt)
courtRoute.post('/update', updateCourtById)
courtRoute.get('/delete/:id', deleteCourtById)
courtRoute.get('/findcourt/:name', findCourtByName)

module.exports = {
    courtRoute
}
