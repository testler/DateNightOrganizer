const router = require("express").Router();
const iControl = require("../controllers/ideaControllers.js");

router.get("/user/:id/idea/", iControl.index);
router.get("/user/:id/idea/new", iControl.newIdea);
router.post("/user/:id/idea/", iControl.create);
router.get("/user/:id/idea/:ideaId", iControl.show);
router.get("/user/:id/idea/Random", iControl.random);
router.get("/user/:id/idea/findRandomIdea", iControl.findRandom);
router.get("/user/:id/idea/:ideaId/edit", iControl.edit);
router.patch("/user/:id/idea/:ideaId", iControl.update);
router.delete("/user/:id/idea/:ideaId", iControl.destroy);

module.exports = router;