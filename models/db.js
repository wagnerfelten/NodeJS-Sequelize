const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('postapp', 'root', 'Wr@271019', {
    host: "localhost",
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};
