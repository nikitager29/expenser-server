const Sequelize = require('sequelize');
const sequelize = new Sequelize('expenserdb', 'user', 'pass', {
    dialect: 'sqlite',
    storage: 'E:/desktopshortcuts/yahalom/expenser/expenser-server/database/expenserdb.db'
});
const initModels = require('../models/init-models');
const models = initModels(sequelize);

module.exports = class userService {
    
    async createUser(newName, newCountDate, newCurrentBalance) {
        newCountDate = new Date().toISOString().split('T')[0];
        newCountDate.toString();
        await models.User.update({Name: newName, CountDate: newCountDate, CurrentBalance: newCurrentBalance}, {
            where: {
                UserId: 1
            }
        })
        .catch((err) => {console.log(err)});               
    }

    async editUserName(newName) {
        await models.User.update({Name: newName}, {
            where: {
                UserId: 1
            }
        })
        .catch((err) => {console.log(err)});               
    }
    
}


