const { db, Model, DataTypes } = require("../db/connection.js");

class Comment extends Model {};
Comment.init(
    {
        body: DataTypes.STRING
    }, 
    {
        sequelize: db
    }
)

module.exports = Comment;