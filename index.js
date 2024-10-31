const { Comment, Like, Post, Profile, User } = require("./models/index");
const { db } = require("./db/connection.js");

// Define your associations here
db.sync();




module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}