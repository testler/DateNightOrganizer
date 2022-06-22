const User = require("../models/User");

let landingPage = (req, res) => {
    res.render("landingPage.ejs");
}
let checkLogin = (req, res) => {
    let posUser = req.body;
    console.log(posUser);
    posUser.username = posUser.username.toLowerCase();
    User.findOne({username: posUser.username}, (err, user)=>{
        if(err){
            res.status(400).json(err);
        }
        console.log(user);
        if(user){ 
            if(user.password == posUser.password){
                res.redirect(`/user/${user._id}/idea`)
            }else{
                console.log("password incorrect");
                res.render("login.ejs", {problem: "password incorrect"});
            }
        }else{
            console.log("hit");
            console.log("user not found");
            res.render("login.ejs", {problem: "user not found"});
        }
    })
    
}
let loginPage = (req, res) => {
    res.render("login.ejs", {problem: ""})
    //res.redirect("/user/:id");
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
        
        res.redirect(`/user/${user._id}`);  
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
        res.redirect(`/user/${user._id}`);   
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
landingPage,
checkLogin,
loginPage,
newUser,
create,
edit,
update,
destroy,
}