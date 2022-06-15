const User = require("../models/User");

let landingPage = (req, res) => {
    res.render("landingPage.ejs");
}
let loginPage = () => {
    res.render("login.ejs");
    //res.redirect("/user/:id");
}
let newUser = (req, res) => {
    res.render("newUser.ejs");
}
let create = (req, res) => {
    User.create((req.body), (err, user) =>{
        if(err){
            res.status(400).json(err);
        } 
        res.redirect("/user/user.objectId");   
    })
}
let showDashboard = (req, res) => {
    res.render("showUserDashdoard.ejs");
}
let edit = (req, res) => {
    User.findById((req.params.id), (err, user) =>{
        if(err){
            res.status(400).json(err);
        } 
        res.render("editUser.ejs", {user: user});   
    })
    res.render("editUser.ejs", req.params);
}
let update = (req, res) => {
    User.findByIdAndUpdate((req.params.id), (err, user) =>{
        if(err){
            res.status(400).json(err);
        } 
        res.redirect("/user/user.objectId/edit");   
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
loginPage,
newUser,
create,
showDashboard,
edit,
update,
destroy,
}