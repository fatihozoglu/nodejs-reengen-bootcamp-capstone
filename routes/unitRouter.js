const router = require("express").Router();
const unitController = require("../controllers/unitController");
const verifyToken = require("../middlewares/verifyToken");

router.use(verifyToken);

router.get("/:id", unitController.getByFactoryId);
router.get("/data/type", unitController.getDataType);
router.post("/", unitController.create);
router.post("/new-column", unitController.createNewColumn);
router.delete("/:id", unitController.deleteById);
router.delete("/all/:id", unitController.deleteUnitsByFactoryId);

module.exports = router;
