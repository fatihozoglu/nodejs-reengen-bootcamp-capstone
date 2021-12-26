const router = require("express").Router();
const unitController = require("../controllers/unitController");
const verifyToken = require("../middlewares/verifyToken");
const checkRole = require("../middlewares/checkRole");

router.use(verifyToken);

router.get("/:id", unitController.getByFactoryId);
router.get("/data/type", unitController.getDataType);
router.post("/", checkRole, unitController.create);
router.post("/column/new", checkRole, unitController.createNewColumn);
router.put("/:id", checkRole, unitController.updateById);
router.delete("/:id", checkRole, unitController.deleteById);
router.delete("/all/:id", checkRole, unitController.deleteUnitsByFactoryId);
router.delete("/column/delete/:name", checkRole, unitController.deleteColumn);

module.exports = router;
