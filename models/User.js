const mongoose = require("mongoose");
const Idea = require("./Idea.js");

const userSchema = new mongoose.Schema(
    {
        username: String,
        password: String,
        profilePhoto: String,
        idea: [Idea]
    }
)

const User = mongoose.model("User", userSchema);

module.exports = User;