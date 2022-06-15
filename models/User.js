const mongoose = require("mongoose");
const ideaSchema = new mongoose.Schema(
    {
        title: String,
        time: String,
        budget: String,
        mood: String,
        description: String,
    }
)
const userSchema = new mongoose.Schema(
    {
        username: String,
        password: String,
        profilePhoto: String,
        idea: [ideaSchema]
    }
)

const User = mongoose.model("User", userSchema);

module.exports = User;