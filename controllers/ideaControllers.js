const User = require("../models/User.js");

let index = (req, res) => {
    User.findById(req.params.id, (err, ideas) =>{
        if(err){
            res.status(400).json(err);
        }
        let ideasArr = User.idea;
        res.render("ideaIndex.ejs", {ideasArr: ideasArr});
    })
}
let newIdea = (req, res) => {
    res.render("../views/newIdea.ejs");
}
let create = (req, res) => {
    User.findById(req.params.id, (err, ideas) =>{
        if(err){
            res.status(400).json(err);
        }
        User.idea.push(req.body);
        User.save((err)=>{
                res.redirect("/ideaIndex");
            })
        })
}
let show = (req, res) => {
    User.findById(req.params.id, (err, ideas) =>{
        if(err){
            res.status(400).json(err);
        }
        let idea = User.idea.find((idea) => {idea.id == req.params.ideaId});
        res.render("showIdea.ejs", {idea: idea});
        })
}
let edit = (req, res) => {
    User.findById(req.params.id, (err, ideas) =>{
        if(err){
            res.status(400).json(err);
        }
        let idea = User.idea.find((idea) => {idea.id == req.params.ideaId});
        res.render("editIdea.ejs", {idea: idea});
        })
}
let update = (req, res) => {
    User.findById(req.params.id, (err, ideas) =>{
        if(err){
            res.status(400).json(err);
        }
        User.idea.find((idea) => {
            if(idea.id == req.params.ideaId){
                idea = req.body;
            }
        });
    })
    User.save((err)=>{});
    res.redirect("/req.params.ideaId");
}
let destroy = (req, res) => {
    User.findById(req.params.id, (err, ideas) =>{
        if(err){
            res.status(400).json(err);
        }
        User.idea.find((idea) => {
            if(idea.id == req.params.ideaId){
                delete idea;
            }
        });
    })
    User.save((err)=>{});
    res.redirect("/");
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