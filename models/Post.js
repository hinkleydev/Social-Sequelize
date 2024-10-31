const { db, Model, DataTypes } = require("../db/connection.js");

class Post extends Model {};
Post.init(
    {
        title: DataTypes.STRING,
        body: DataTypes.STRING
    }, 
    {
        sequelize: db
    }
)

module.exports = Post;