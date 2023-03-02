const {sequelize} = require('../config/db_connect')
const initmodels = require('../models/init-models')
const { Op } = require("sequelize");

var models = initmodels(sequelize)

const getAllCourt = async (req, res) => {
    const data = await models.TennisCourt.findAll()

    if(data.length === 0) {
        res.send('Tennis court is empty!')
        
    } else {  
        res.send(data) 
    }
}

const insertCourt = async (req, res) => {
    try {
        const court = req.body
        console.log(court)
        const insert = await models.TennisCourt.create({
            Id: court.Id,
            Name: court.Name,
            Address: court.Address,
            Price: court.Price,
            OwnerId: court.OwnerId,
            GroupCourt: court.GroupCourt,
            Image: court.Image
        })
        res.status(200).send(insert)
    } catch (error) {
        res.status(500).send(error)
    }

}

const updateCourtById = async (req, res) => {
    try {
        const court = req.body
        const update = await models.TennisCourt.update ({
            Name: court.Name,
            Address: court.Address,
            Price: court.Price,
            OwnerId: court.OwnerId,
            GroupCourt: court.GroupCourt,
            Image: court.Image
        }, {
            where: {
                Id: court.Id
            }
        })
        res.status(200).send(update)
    } catch (error) {
        res.status(500).send(error)
    }

}

const deleteCourtById = async (req, res) => {
    try {
        const {id} = req.params
        console.log(id)
        const deleteCourt = await models.TennisCourt.update({
            Status : 0
        }, {
            where: {
                Id : id
            }
        })
        res.status(200).send(deleteCourt)
    } catch (error) {
        res.status(500).send(error)
    }
}

const findCourtByName = async (req, res) => {
    try {
        const {name} = req.params
        const find = await models.TennisCourt.findAll({
            where: {
                Name: {
                    [Op.like]: '%' + name + '%'
                }
            }
        })
        if (find.length === 0) {
            res.send('Court not existed!')
        } else {
            res.send(find)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    getAllCourt,
    insertCourt,
    updateCourtById,
    deleteCourtById,
    findCourtByName
}