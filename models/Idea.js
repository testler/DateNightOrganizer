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

const Idea = mongoose.model("Idea", ideaSchema);

module.exports = Idea;
