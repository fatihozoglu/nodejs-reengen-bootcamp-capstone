const router = require("express").Router();
const unitController = require("../controllers/unitController");
const verifyToken = require("../middlewares/verifyToken");

router.use(verifyToken);

router.get("/:id", unitController.getByFactoryId);
router.delete("/:id", unitController.deleteUnitById);
router.delete("/all/:id", unitController.deleteUnitsByFactoryId);

module.exports = router;
