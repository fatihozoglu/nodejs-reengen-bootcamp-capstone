const router = require("express").Router();
const factoryController = require("../controllers/factoryController");
const verifyToken = require("../middlewares/verifyToken");

router.use(verifyToken);

router.get("/", factoryController.getAll);
router.get("/type", factoryController.getDataType);
router.post("/", factoryController.create);
router.post("/new-column", factoryController.createNewColumn);
router.put("/:id", factoryController.updateById);
router.delete("/:id", factoryController.deleteById);

module.exports = router;
