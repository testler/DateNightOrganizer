const router = require("express").Router();
const uControl = require("../controllers/userControllers.js");

router.get("/", uControl.landingPage);
router.get("/user/new", uControl.newUser);
router.post("/user", uControl.createUser);
router.get("/user/:id", uControl.show);
router.get("/user/:id/edit", uControl.edit);
router.patch("/object/:id", uControl.update);
router.delete("/user/:id", uControl.destroy);

module.exports = router;