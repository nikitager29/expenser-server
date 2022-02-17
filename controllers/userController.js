const container = require("../containerConfig");

const userService = container.resolve("userService");

exports.runEditUserName = async (req) => {
    const newName = JSON.stringify(req.body.name);
    const result = await userService.editUserName(newName);
    return result;
};

exports.runCreateUser = async (req) => {
    const newName = JSON.stringify(req.body.name);
    const newCountDate = JSON.stringify(req.body.countDate);
    const newCurrentBalance = JSON.stringify(req.body.currentBalance);
    const result = await userService.createUser(newName, newCountDate, newCurrentBalance);
    return result;
};


