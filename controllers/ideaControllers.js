const User = require("../models/User.js");

let index = (req, res) => {
    User.findById((req.params.id), (err, user) =>{
        if(err){
            res.status(400).json(err);
        }
        console.log(user);
        let ideasArr;
        if(user.idea.length != undefined){
            ideaArr = user.idea;
            res.render("ideaIndex.ejs", {ideasArr: ideasArr, user:user});
        }else{
            res.render("ideaIndex.ejs");
        }
    })
}
let newIdea = (req, res) => {
    User.findById(req.params.id, (err, user) =>{
        if(err){
            res.status(400).json(err);
        }
        res.render("../views/newIdea.ejs", {user:user});
        })
    
}
let create = (req, res) => {
    User.findById(req.params.id, (err, user) =>{
        if(err){
            res.status(400).json(err);
        }
        let newIdea = req.body;
        let strParser = () => {
            let testArr = newIdea.budget.split("");
            testArr.forEach((char, i)=>{
                if(char == "$"){
                    delete testArr[i];
                }
            })
            newIdea.budget = testArr.join("");
        }
        user.idea.push(newIdea);
        user.save((err)=>{
                res.redirect(`/user/${user._id}/idea/`);
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
        let idea = user.idea.find((posIdea) => {
            if(posIdea.id == req.params.ideaId){
                return posIdea;
            }
        });
        res.render("showIdea.ejs", {idea: idea, user: user});
    })
}
let edit = (req, res) => {
    User.findById(req.params.id, (err, user) =>{
        if(err){
            res.status(400).json(err);
        }
        let idea = user.idea.find((posIdea) => {
            if(posIdea.id == req.params.ideaId){
                return posIdea;
            }
        });
        res.render("editIdea.ejs", {idea: idea, user: user});
        })
}
let update = (req, res) => {
    User.findById(req.params.id, (err, user) =>{
        if(err){
            res.status(400).json(err);
        }
        let idea = user.idea.find((posIdea, i) => {
            console.log(posIdea);
            console.log(posIdea._id);
            console.log(req.params.ideaId);
            if(posIdea._id == req.params.ideaId){
                user.idea[i] = req.body;b
                console.log(user.idea[i]);
                return user.idea[i];
            }
            
        });
        user.save();
        console.log(user);
        res.redirect(`/user/${user._id}/idea/${idea._id}`);
        // res.render("showIdea.ejs", {idea: idea, user: user});
    })
}
let destroy = (req, res) => {
    User.findById(req.params.id, (err, user) =>{
        if(err){
            res.status(400).json(err);
        }
        user.idea.find((posIdea, i) => {
            console.log("hit" + i);
            if(posIdea._id == req.params.ideaId){
                console.log("it's true");
                user.idea.splice(i,1);
            }
        });
        user.save((err)=>{});
        res.redirect(`/user/${user._id}/idea/`);
    })
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