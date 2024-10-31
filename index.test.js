const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require('./db/connection.js');
const { describe, test, expect } = require('@jest/globals')

describe('Social Sequelzie Test', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the test suite is run
        await db.sync({ force: true });
    })

    // Write your tests here
    
    test("connect to the database", async function() {
        const result = await db.query("SELECT 1+1 as result;");
        // Basic sanity check
        expect(result[0][0].result).toBe(2);
    })

    test("user has correct fields", async function() {
        const user = await User.create({username: "bob", email: "bob@example.com"});
        expect(user.username).toBe("bob");
        expect(user.email).toBe("bob@example.com");
    })

    test("profile has correct fields", async function() {
        const profile = await Profile.create({
            bio: "This is a bio",
            profilePicture: "This is a profile picture",
            birthday: "09-03-2003"
        })
        expect(profile.bio).toBe("This is a bio");
        expect(profile.profilePicture).toBe("This is a profile picture");
        expect(profile.birthday).toBe("09-03-2003");
    })

    test.skip("profile rejects invalid dates", async function() {
        //expect(function() {} ).toThrowError()
        // TODO: Debug why this validation causes an error to appear late
    })

    test("post has correct fields", async function() {
        const post = await Post.create({
            title: "My blog post",
            body: "My blog content"
        });
        expect(post.title).toBe("My blog post");
        expect(post.body).toBe("My blog content");
    })

    test("comment has correct fields", async function() {
        const comment = await Comment.create({body: "test"});
        // Create a basic comment
        expect(comment.body).toBe("test");
        expect(comment.createdAt).toBeDefined(); // Leave the metadata up to Sequelize
    })


})