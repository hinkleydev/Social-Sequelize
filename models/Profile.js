const { db, Model, DataTypes } = require("../db/connection.js");

class Profile extends Model {};
Profile.init(
    {
        bio: DataTypes.STRING,
        profilePicture: DataTypes.STRING,
        birthday: {
            type: DataTypes.STRING,
            validate: {
                //isDate: true
            }
        }
    },
    {
        sequelize: db
    }
)

module.exports = Profile;