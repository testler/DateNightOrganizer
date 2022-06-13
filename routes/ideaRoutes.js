const router = require("express").Router();
const iControl = require("../controllers/ideaControllers.js");

router.get("/", iControl.index);
router.get("/idea/new", iControl.newIdea);
router.post("/idea", iControl.create);
router.get("/idea/:id", iControl.show);
router.get("/idea/:id/edit", iControl.edit);
router.patch("/idea/:id", iControl.update);
router.delete("/idea/:id", iControl.destroy);

module.exports = router;