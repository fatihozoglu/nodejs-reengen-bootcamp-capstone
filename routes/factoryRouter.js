const router = require("express").Router();
const factoryController = require("../controllers/factoryController");
const verifyToken = require("../middlewares/verifyToken");

router.use(verifyToken);
// Routing for "/"
router.get("/", factoryController.getAll);
router.get("/:id", factoryController.getById);
router.post("/", factoryController.createNew);
router.put("/:id", factoryController.updateById);
router.delete("/:id", factoryController.deleteById);

module.exports = router;
