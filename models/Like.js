const { db, Model, DataTypes } = require("../db/connection.js");

class Like extends Model {};
Like.init(
    {
        reactionType: DataTypes.STRING,
    }, 
    {
        sequelize: db
    }
)

module.exports = Like;