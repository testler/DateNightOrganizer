const User = require("../models/User.js");
const Idea = require("./models/Idea.js");

let index = (req, res) => {
    Idea.find({}, (err, ideas) =>{
        if(err){
            res.status(400).json(err);
        }
        res.render("ideaIndex.ejs", {ideasArr: ideas});
    })
}
let newIdea = (req, res) => {
    res.render("../views/newIdea.ejs");
}
let create = (req, res) => {
    Idea.create((req.body), (err, idea) =>{
        if(err){
            res.status(400).json(err);
        } 
        res.redirect("/ideaIndex")       
    })
}
let show = (req, res) => {
    Idea.findById(req.params.id, (err, idea) =>{
        if(err){
            res.status(400).json(err);
        }
        res.render("showIdea.ejs", {idea: idea});
    })
}
let edit = (req, res) => {
    res.render("editIdea.ejs");
}
let update = (req, res) => {
    Idea.findById(req.params.id, (err, idea) =>{
        if(err){
            res.status(400).json(err);
        }
        res.redirect("/ideaIndex");
    })
}
let destroy = (req, res) => {
    res.render("../views/deleteIdea.ejs");
}

module.exports = {
index,
newIdea,
create,
show,
edit,
update,
destroy,
}