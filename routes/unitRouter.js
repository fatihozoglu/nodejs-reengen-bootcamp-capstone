const router = require("express").Router();
const unitController = require("../controllers/unitController");
const verifyToken = require("../middlewares/verifyToken");

router.use(verifyToken);

router.get("/:id", unitController.getByFactoryId);
router.get("/data/type", unitController.getDataType);
router.post("/", unitController.create);
router.post("/column/new", unitController.createNewColumn);
router.put("/:id", unitController.updateById);
router.delete("/:id", unitController.deleteById);
router.delete("/all/:id", unitController.deleteUnitsByFactoryId);
router.delete("/column/delete", unitController.deleteColumn);

module.exports = router;
