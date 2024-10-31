const { Sequelize, Model, DataTypes } = require("sequelize");

const db = new Sequelize({
    dialect: "sqlite",
    storage: "./sqlite.db"
});


module.exports = {
    db,
    Model,
    DataTypes
}