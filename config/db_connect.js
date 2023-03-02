const Sequelize = require("sequelize");

const sequelize = new Sequelize (
    'tenisu_v1',
    'root',
    'admin', 
    {
        host: '127.0.0.1',
        port: '3304',
        dialect: 'mysql'
    }
)

module.exports = {
    sequelize
}

