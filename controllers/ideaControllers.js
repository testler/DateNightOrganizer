
let index = (req, res) => {
    res.render("../views/ideaIndex.ejs");
}
let newIdea = (req, res) => {
    res.render("../views/newIdea.ejs");
}
let create = (req, res) => {
    res.render("../views/createIdea.ejs");
}
let show = (req, res) => {
    res.render("../views/showIdea.ejs");
}
let edit = (req, res) => {
    res.render("../views/editIdea.ejs");
}
let update = (req, res) => {
    res.render("../views/updateIdea.ejs");
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