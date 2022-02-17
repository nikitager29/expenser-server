var DataTypes = require("sequelize").DataTypes;
var _Expense = require("./Expense");
var _User = require("./User");

function initModels(sequelize) {
  var Expense = _Expense(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);

  Expense.belongsTo(User, { as: "User", foreignKey: "UserId"});
  User.hasMany(Expense, { as: "Expenses", foreignKey: "UserId"});

  return {
    Expense,
    User,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
