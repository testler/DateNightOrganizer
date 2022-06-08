const router = require("express").Router();
const iControl = require("../controllers/ideaControllers.js");

router.get("/", iControl.index);
router.get("/user/new", iControl.newIdea);
router.post("/user", iControl.create);
router.get("/user/:id", iControl.show);
router.get("/user/:id/edit", iControl.edit);
router.patch("/object/:id", iControl.update);
router.delete("/user/:id", iControl.destroy);

module.exports = router;