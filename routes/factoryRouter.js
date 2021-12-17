const router = require("express").Router();
const factoryController = require("../controllers/factoryController");
const verifyToken = require("../middlewares/verifyToken");

router.use(verifyToken);

router.get("/", factoryController.getAll);
router.post("/", factoryController.createNew);
router.put("/:id", factoryController.updateByFactoryId);
router.delete("/:id", factoryController.deleteFactoryById);

module.exports = router;
