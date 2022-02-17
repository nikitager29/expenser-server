const awilix = require("awilix");
const userService = require("./services/userService");

const container = awilix.createContainer( {injectionMode: awilix.InjectionMode.CLASSIC});

container.register({
    userService: awilix.asClass(userService).singleton()
});

module.exports = container;