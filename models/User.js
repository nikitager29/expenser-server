const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    UserId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CountDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CurrentBalance: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    MoneySpent: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'User',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_User_1",
        unique: true,
        fields: [
          { name: "UserId" },
        ]
      },
    ]
  });
};
