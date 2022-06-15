const express = require("express");
const app = express();
const PORT = 3000;
const uRoutes = require("./routes/userRoutes.js");
const uControl = require("./controllers/userControllers.js");
const iRoutes = require("./routes/ideaRoutes");
const methodOverride = require("method-override");
app.set("view engine", "ejs");

app.use(methodOverride("_method"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/user/:id/ideas", iRoutes);
app.use("/", uRoutes);

app.listen(PORT, ()=>{
    console.log("Serer is up on port" + PORT);
})