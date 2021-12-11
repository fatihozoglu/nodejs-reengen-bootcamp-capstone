const router = require("express").Router();
const { createUser } = require("../controllers/userController");
const registerValidator = require("../middlewares/registerValidator");

router.post("/", registerValidator, createUser);

module.exports = router;
