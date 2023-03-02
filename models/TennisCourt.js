const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TennisCourt', {
    Id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    Address: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Price: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    OwnerId: {
      type: DataTypes.STRING(200),
      allowNull: true,
      references: {
        model: 'CourtOwner',
        key: 'Email'
      }
    },
    GroupCourt: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Rating: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Image: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    Status: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TennisCourt',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id" },
        ]
      },
      {
        name: "OwnerId",
        using: "BTREE",
        fields: [
          { name: "OwnerId" },
        ]
      },
    ]
  });
};
