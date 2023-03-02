var DataTypes = require("sequelize").DataTypes;
var _Accounts = require("./Accounts");
var _Booking = require("./Booking");
var _CourtOwner = require("./CourtOwner");
var _Customer = require("./Customer");
var _Roles = require("./Roles");
var _TennisCourt = require("./TennisCourt");

function initModels(sequelize) {
  var Accounts = _Accounts(sequelize, DataTypes);
  var Booking = _Booking(sequelize, DataTypes);
  var CourtOwner = _CourtOwner(sequelize, DataTypes);
  var Customer = _Customer(sequelize, DataTypes);
  var Roles = _Roles(sequelize, DataTypes);
  var TennisCourt = _TennisCourt(sequelize, DataTypes);

  TennisCourt.belongsTo(CourtOwner, { as: "Owner", foreignKey: "OwnerId"});
  CourtOwner.hasMany(TennisCourt, { as: "TennisCourts", foreignKey: "OwnerId"});
  Booking.belongsTo(Customer, { as: "Cu", foreignKey: "CusId"});
  Customer.hasMany(Booking, { as: "Bookings", foreignKey: "CusId"});
  Accounts.belongsTo(Roles, { as: "Role", foreignKey: "RoleId"});
  Roles.hasMany(Accounts, { as: "Accounts", foreignKey: "RoleId"});
  Booking.belongsTo(TennisCourt, { as: "Court", foreignKey: "CourtId"});
  TennisCourt.hasMany(Booking, { as: "Bookings", foreignKey: "CourtId"});

  return {
    Accounts,
    Booking,
    CourtOwner,
    Customer,
    Roles,
    TennisCourt,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
