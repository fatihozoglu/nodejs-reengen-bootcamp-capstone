const router = require("express").Router();
const factoryController = require("../controllers/factoryController");
const verifyToken = require("../middlewares/verifyToken");

router.use(verifyToken);

router.get("/", factoryController.getAll);
router.get("/type", factoryController.getDataType);
router.post("/", factoryController.createNew);
router.put("/:id", factoryController.updateFactoryById);
router.delete("/:id", factoryController.deleteFactoryById);

module.exports = router;
