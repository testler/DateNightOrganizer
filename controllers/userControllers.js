const uDB = require("../models/User");

let landingPage = (req, res) => {
    res.render("../views/landingPage.ejs");
}
let loginPage = () => {
    res.render("../views/login.ejs");
}
let newUser = (req, res) => {
    res.render("../views/newUser.ejs");
}
let create = (req, res) => {
    res.render("../views/createUser.ejs");
}
let showDashboard = (req, res) => {
    res.render("../views/showUserDashdoard.ejs");
}
let edit = (req, res) => {
    res.render("../views/editUser.ejs");
}
let update = (req, res) => {
    res.render("../views/updateUser.ejs");
}
let destroy = (req, res) => {
    res.render("../views/deleteUser.ejs");
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