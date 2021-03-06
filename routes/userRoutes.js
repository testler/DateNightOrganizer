const router = require("express").Router();
const uControl = require("../controllers/userControllers.js");

router.get("/", uControl.homePage);
router.post("/user/checkLogin", uControl.checkLogin);
router.get("/user/new", uControl.newUser);
router.post("/user", uControl.create);
router.get("/user/:id/edit", uControl.edit);
router.patch("/user/:id", uControl.update);
router.delete("/user/:id", uControl.destroy);

module.exports = router;