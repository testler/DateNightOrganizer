const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;
const uRoutes = require("./routes/userRoutes.js");
const uControl = require("./controllers/userControllers.js");
const iRoutes = require("./routes/ideaRoutes");
const methodOverride = require("method-override");
require("dotenv").config();
require("./db/connection");
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.use(methodOverride("_method"));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/user/:id/idea", iRoutes);
app.use("/", uRoutes);

app.listen((process.env.PORT || PORT), ()=>{
    console.log("Server is up on port" + PORT);
})