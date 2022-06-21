const router = require("express").Router();
const iControl = require("../controllers/ideaControllers.js");

router.get("/", iControl.index);
router.get("/new", iControl.newIdea);
router.post("/", iControl.create);
router.get("/:ideaId", iControl.show);
router.get("/Random", iControl.random);
router.get("/findRandomIdea", iControl.findRandom)
router.get("/:ideaId/edit", iControl.edit);
router.patch("/:ideaId", iControl.update);
router.delete("/:ideaId", iControl.destroy);

module.exports = router;