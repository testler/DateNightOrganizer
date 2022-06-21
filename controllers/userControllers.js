const User = require("../models/User");

let landingPage = (req, res) => {
    res.render("landingPage.ejs");
}
let checkLogin = (req, res) => {
    let loginInfo = req.body;
    let userInfo;
    User.findOne(({username: loginInfo.username}), (err, user)=>{
        if(err){
            res.status(400).json(err);
        }
        userInfo = user;
        if(userInfo == undefined){
        res.render("login.ejs", {problem: 1})
        }else if(userInfo.password !== loginInfo.password){
        res.render("login.ejs", {problem: 2})
        }else{
        res.redirect(`/user/${userInfo._id}`)
    }
    })
}
let loginPage = (req, res) => {
    res.render("login.ejs", {problem: 0})
    //res.redirect("/user/:id");
}
let newUser = (req, res) => {
    res.render("newUser.ejs");
}
let create = (req, res) => {
    console.log(req.body);
    User.create((req.body), (err, user) =>{
        if(err){
            res.status(400).json(err);
        } 
        console.log(user);
        console.log(err);
        res.redirect(`/user/${user._id}`);  
    })
    
     
}
let showDashboard = (req, res) => {
    User.findById((req.params.id), (err, user) =>{
        if(err){
            res.status(400).json(err);
        }
    res.render("UserDashboard.ejs", {user: user});
    })
}
let edit = (req, res) => {
    User.findById((req.params.id), (err, user) =>{
        if(err){
            res.status(400).json(err);
        } 
        console.log(user);
        res.render("editUser.ejs", {user: user});   
    })
    
}
let update = (req, res) => {
    User.findByIdAndUpdate((req.params.id), (err, user) =>{
        if(err){
            res.status(400).json(err);
        } 
        res.redirect(`/user/${user._id}/edit`);   
    })
}
let destroy = (req, res) => {
    User.findByIdAndDelete((req.params.id), (err, user) =>{
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
showDashboard,
edit,
update,
destroy,
}