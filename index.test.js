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

    test("comment has correct fields", async function() {
        const comment = await Comment.create({body: "test"});
        // Create a basic comment
        expect(comment.body).toBe("test");
        expect(comment.createdAt).toBeDefined(); // Leave the metadata up to Sequelize
    })


})