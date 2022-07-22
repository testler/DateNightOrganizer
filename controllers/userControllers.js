const User = require("../models/User");

let homePage = (req, res) => {
    res.render("homePage.ejs", {problem: ""})
}
let checkLogin = (req, res) => {
    let posUser = req.body;
    posUser.username = posUser.username.toLowerCase();
    User.findOne({username: posUser.username}, (err, user)=>{
        if(err){
            res.status(400).json(err);
        }
        if(user){ 
            if(user.password == posUser.password){
                res.redirect(`/user/${user._id}/idea`)
            }else{
                res.render("homePage.ejs", {problem: "Password Incorrect, please try again"});
            }
        }else{
            res.render("homePage.ejs", {problem: "No Users with that username"});
        }
    })
    
}

let newUser = (req, res) => {
    res.render("newUser.ejs");
}
let create = (req, res) => {
    let posNewUser = req.body;
    posNewUser.username = posNewUser.username.toLowerCase();
    User.create((posNewUser), (err, user) =>{
        if(err){
            res.status(400).json(err);
        }
        
        res.redirect(`/user/${user._id}/idea`);  
    })
    
     
}

let edit = (req, res) => {
    User.findById((req.params.id), (err, user) =>{
        if(err){
            res.status(400).json(err);
        } 
        res.render("editUser.ejs", {user: user});   
    })
    
}
let update = (req, res) => {
    User.findByIdAndUpdate(req.params.id, {password: req.body.password}, (err, user) =>{
        if(err){
            res.status(400).json(err);
        } 
        res.redirect(`/user/${user._id}/idea`);   
    })
}
let destroy = (req, res) => {
    User.findByIdAndDelete(req.params.id, (err, user) =>{
        if(err){
            res.status(400).json(err);
        } 
        res.redirect("/");   
    })
}

module.exports = {
homePage,
checkLogin,
newUser,
create,
edit,
update,
destroy,
}