const mongoose = require("mongoose");
const idea = require("./Ideas.js")

const userSchema = new mongoose.Schema(
    {
        username: String,
        password: String,
        profilePhoto: String,
        idea: [idea.Idea],
    }
)

module.exports = mongoose.model("User", userSchema);