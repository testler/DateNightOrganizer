const User = require("../models/User.js");

let index = (req, res) => {
    User.findById(req.params.id, (err, user) =>{
        if(err){
            res.status(400).json(err);
        }
        let ideasArr;
        if(user.idea !== null || user.idea !== undefined){
            ideaArr = user.idea;
            res.render("ideaIndex.ejs", {ideasArr: ideasArr});
        }else{
            res.render("ideaIndex.ejs");
        }
    })
}
let newIdea = (req, res) => {
    res.render("../views/newIdea.ejs");
}
let create = (req, res) => {
    User.findById(req.params.id, (err, user) =>{
        if(err){
            res.status(400).json(err);
        }
        user.idea.push(req.body);
        user.save((err)=>{
                res.redirect("/ideaIndex");
            })
        })
}
let random = (req, res) => {
    User.findById(req.params.id, (err, user) =>{
        if(err){
            res.status(400).json(err);
        }
        res.render("randomIdea.ejs", {user: user});
        })
}
let findRandom = (req, res) => {
    let filter = req.body;
    User.findById(req.params.id, (err, user) =>{
        if(err){
            res.status(400).json(err);
        }
        let idea = user.idea.filter((idea) => {idea.time <= filter.time});
        idea = idea.filter((idea)=>{idea.budget <= filter.budget});
        idea = idea.filter((idea)=>{idea.mood == filter.mood});
        idea = idea[Math.floor(Math.random() * idea.length)];
        if(idea == undefined){
            res.send("could not find idea");
        }else{
            res.render("showIdea.ejs", {idea: idea});    
        }
        
        })
}
let show = (req, res) => {
    User.findById(req.params.id, (err, user) =>{
        if(err){
            res.status(400).json(err);
        }
        let idea = user.idea.find((idea) => {idea.id == req.params.ideaId});
        res.render("showIdea.ejs", {idea: idea});
        })
}
let edit = (req, res) => {
    User.findById(req.params.id, (err, user) =>{
        if(err){
            res.status(400).json(err);
        }
        let idea = user.idea.find((idea) => {idea.id == req.params.ideaId});
        res.render("editIdea.ejs", {idea: idea});
        })
}
let update = (req, res) => {
    User.findById(req.params.id, (err, user) =>{
        if(err){
            res.status(400).json(err);
        }
        user.idea.find((idea) => {
            if(idea.id == req.params.ideaId){
                idea = req.body;
            }
        });
        user.save((err)=>{});
    })
    res.redirect("/req.params.ideaId");
}
let destroy = (req, res) => {
    User.findById(req.params.id, (err, user) =>{
        if(err){
            res.status(400).json(err);
        }
        user.idea.find((idea) => {
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
random,
findRandom,
show,
edit,
update,
destroy,
}