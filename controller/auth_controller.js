const { sequelize } = require('../config/db_connect')
const innitModel = require('../models/init-models')
const models = innitModel(sequelize)

const bcrypt = require('bcryptjs')

const signUp = async (req, res) => {
    const { email, password, roleId } = req.body
    const isExist = await models.Accounts.findOne({
        where: {
            Email: email
        }
    })
    console.log(isExist)
    if (isExist) {
        res.status(201).send({ message: "Email is existed!", status_code: 201, success: true })
    } else {
        const salt = bcrypt.genSaltSync(10)
        const hashPass = bcrypt.hashSync(password, salt)

        const account = await models.Accounts.create({
            Email: email,
            Password: hashPass,
            RoleId: roleId
        })
        if (account != null) {
            res.status(201).send({ message: "Register successful!", status_code: 201, success: true })
        } else {
            res.status(200).send({ message: "Register fail!", status_code: 200, success: false })
        }
    }

}

const signIn = async (req, res) => {
    const { email, password } = req.body
    const user = await models.Accounts.findOne({
        where: {
            Email: email
        }
    })

    if (user != null) {
        const isMath = bcrypt.compareSync(password, user.Password)
        if (isMath) {
            res.status(200).send({ message: "SingIn Successful!", status_code: 200, success: true })
        } else {
            res.status(200).send({ message: "Password wrong!", status_code: 200, success: false })
        }
    } else {
        res.status(200).send({ message: "Account not exist!", status_code: 200, success: false })
    }
}


module.exports = {
    signUp,
    signIn
}