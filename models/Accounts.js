const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Accounts', {
    Email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    Password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RoleId: {
      type: DataTypes.STRING(5),
      allowNull: true,
      references: {
        model: 'Roles',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'Accounts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Email" },
        ]
      },
      {
        name: "RoleId",
        using: "BTREE",
        fields: [
          { name: "RoleId" },
        ]
      },
    ]
  });
};
