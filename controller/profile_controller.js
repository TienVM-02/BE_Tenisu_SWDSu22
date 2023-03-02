const { sequelize } = require('../config/db_connect')
const innitModel = require('../models/init-models')
const models = innitModel(sequelize)

const getProfile = async (req, res) => {
    const {RoleId, Email} = req.body
    if (RoleId === "CM") {
        const profile = await models.Customer.findOne({
            where: {
                Email
            }
        })
        if (profile != null) {
            res.status(201).send(profile)
        } else {
            res.status(201).send({ message: "Please add your information!", status_code: 201, success: false })
        }
    } else if (RoleId === "ON") {
        const profile = await models.CourtOwner.findOne({
            where: {
                Email
            }
        })
        if (profile != null) {
            res.status(201).send(profile)
        } else {
            res.status(201).send({ message: "Please add your information!", status_code: 201, success: false })
        }
    }
}

const insertProfile = async (req, res) => {
    const { email, fullname, phone, dob, gender, address, roleId } = req.body
    const isExist = await models.Accounts.findOne({
        where: {
            Email: email
        }
    })
    if (isExist != null) {
        if (roleId === "CM") {
            const profile = await models.Customer.create({
                Email: email,
                FullName: fullname,
                Phone: phone,
                Dob: dob,
                Gender: gender,
                Address: address
            })
            if (profile != null) {
                res.status(201).send({ message: "Update successfule!", status_code: 201, success: true })
            } else {
                res.status(201).send({ message: "Update fail", status_code: 201, success: false })
            }
        } else if (roleId === "ON") {
            const profile = await models.CourtOwner.create({
                Email: email,
                FullName: fullname,
                Phone: phone,
                Dob: dob,
                Gender: gender,
                Address: address
            })
            if (profile != null) {
                res.status(201).send({ message: "Update successfule!", status_code: 201, success: true })
            } else {
                res.status(201).send({ message: "Update fail", status_code: 201, success: false })
            }
        }
    }
}

const updateProfile = async (req, res) => {
    const { email, fullname, phone, dob, gender, address, roleId } = req.body
    if (roleId === "CM") {
        const isExist = await models.Customer.findOne({
            where: {
                Email: email
            }
        })
        if(isExist) {
            const profile = await models.Customer.update(
                {
                    FullName: fullname,
                    Phone: phone,
                    Dob: dob,
                    Gender: gender,
                    Address: address
                }, {
                where: {
                    Email: email
                }
            }
    
            )
            if (profile != null) {
                res.status(201).send({ message: "Update successfule!", status_code: 201, success: true })
            } else {
                res.status(201).send({ message: "Update fail", status_code: 201, success: false })
            }
        } else {
            res.status(500).send({ message: "Update fail", status_code: 500, success: false })
        }
    } else if (roleId === "ON") {
        const isExist = await models.CourtOwner.findOne({
            where: {
                Email: email
            }
        })
        if(isExist) {
            const profile = await models.CourtOwner.update(
                {
                    FullName: fullname,
                    Phone: phone,
                    Dob: dob,
                    Gender: gender,
                    Address: address
                }, {
                    where: {
                        Email: email
                    }
                }
            )
            if (profile != null) {
                res.status(201).send({ message: "Update successfule!", status_code: 201, success: true })
            } else {
                res.status(201).send({ message: "Update fail", status_code: 201, success: false })
            }
        } else {
            res.status(500).send({ message: "Update fail", status_code: 500, success: false })
        }
    }
}

module.exports = {
    getProfile,
    insertProfile,
    updateProfile
}