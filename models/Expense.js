const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Expense', {
    ExpenseId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    UserId: {
      type: "",
      allowNull: true,
      references: {
        model: 'User',
        key: 'UserId'
      }
    }
  }, {
    sequelize,
    tableName: 'Expense',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_Expense_1",
        unique: true,
        fields: [
          { name: "ExpenseId" },
        ]
      },
    ]
  });
};
