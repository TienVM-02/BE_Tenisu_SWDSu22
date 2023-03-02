const { sequelize } = require('../config/db_connect')
const innitModel = require('../models/init-models')
const models = innitModel(sequelize)
const {to24Hours, to12Hours} = require('convert-string-time')

const getBooking = async (req, res) => {
    const {CusId, Status} = req.body
    const bookingList = await models.Booking.findAll({
        where: {
            CusId,
            Status
        }
    })

    if(bookingList.length === 0) {
        res.status(201).send({ message: "No booking coming!", status_code: 201, success: true })
    } else {
        res.status(201).send(bookingList)
    }
}

const insertBooking = async (req, res) => {
    const {CusId, StartTime, EndTime, Price, CourtId, BookingDate, CusName} = req.body
    const booking = await models.Booking.create({
        CusId,
        StartTime,
        EndTime, 
        Price,
        CourtId,
        BookingDate,
        CusName
    })
    if (booking != null) {
        res.status(201).send({ message: "Booking successful!", status_code: 201, success: true })
    } else {
        res.status(201).send({ message: "Booking fail", status_code: 201, success: false })
    }
}

const updateBooking = async (req, res) => {
    const {Id, CusId, StartTime, EndTime, Price, CourtId, BookingDate, CusName} = req.body
    const bookingUpdate = await models.Booking.update({
        CusId,
        StartTime,
        EndTime, 
        Price,
        CourtId,
        BookingDate,
        CusName
    },{
        where: {
            Id,
            CusId,
            Status: 1
        } 
    })
    if (bookingUpdate != null) {
        res.status(201).send({ message: "Booking update successful!", status_code: 201, success: true })
    } else {
        res.status(201).send({ message: "Booking update fail!", status_code: 201, success: false })
    }
}

const cancelBooking = async (req, res) => {
    const {Id} = req.body
    const cancelBooking = await models.Booking.update({
        Status: false
    },{
        where: {
            Id
        }
    })
    if(cancelBooking != null) {
        res.status(201).send({ message: "Cancel successful!", status_code: 201, success: true })
    } else {
        res.status(201).send({ message: "Cancel fail!", status_code: 201, success: true })
    }
}

const checkExistTime = async (req, res) => {
    const {StartTime, EndTime, BookingDate, CourtId} = req.body
    
    const booking = await models.Booking.findAll(
        {
            attributes: ['StartTime', 'EndTime'],
            where: {
                BookingDate,
                CourtId,
                Status: 1
            }
        }
    )
    const isExisted = booking.findIndex(item => to12Hours(StartTime) < to12Hours(item.EndTime) && to12Hours(EndTime) > to12Hours(item.StartTime))
    if(isExisted != -1) {
        console.log("Time range is existed!")
        res.send(booking)
    } else {
        res.send("Time range really to book court!")
    }
}

module.exports = {
    getBooking,
    insertBooking,
    updateBooking,
    cancelBooking,
    checkExistTime
}