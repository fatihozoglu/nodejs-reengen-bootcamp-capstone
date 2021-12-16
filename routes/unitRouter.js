const router = require("express").Router();
const unitController = require("../controllers/unitController");
const verifyToken = require("../middlewares/verifyToken");

router.use(verifyToken);
// Routing for "/"
router.get("/:id", unitController.getByFactoryId);

module.exports = router;
