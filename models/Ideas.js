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

module.exports = mongoose.model("Idea", ideaSchema);