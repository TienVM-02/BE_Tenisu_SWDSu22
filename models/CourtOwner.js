const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CourtOwner', {
    Email: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true
    },
    FullName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Phone: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    Dob: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Gender: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING(300),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CourtOwner',
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
    ]
  });
};
