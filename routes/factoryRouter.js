const router = require("express").Router();
const factoryController = require("../controllers/factoryController");
const verifyToken = require("../middlewares/verifyToken");
const checkRole = require("../middlewares/checkRole");

router.use(verifyToken);

router.get("/", factoryController.getAll);
router.get("/type", factoryController.getDataType);
router.post("/", checkRole, factoryController.create);
router.post("/column/new", checkRole, factoryController.createNewColumn);
router.put("/:id", checkRole, factoryController.updateById);
router.delete("/:id", checkRole, factoryController.deleteById);
router.delete(
  "/column/delete/:name",
  checkRole,
  factoryController.deleteColumn
);

module.exports = router;
