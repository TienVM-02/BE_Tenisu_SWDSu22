const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Booking', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CusId: {
      type: DataTypes.STRING(200),
      allowNull: true,
      references: {
        model: 'Customer',
        key: 'Email'
      }
    },
    CreateDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    StartTime: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    EndTime: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    Price: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    CourtId: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'TennisCourt',
        key: 'Id'
      }
    },
    BookingDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    CusName: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Booking',
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
        name: "CusId",
        using: "BTREE",
        fields: [
          { name: "CusId" },
        ]
      },
      {
        name: "CourtId",
        using: "BTREE",
        fields: [
          { name: "CourtId" },
        ]
      },
    ]
  });
};
