const router = require("express").Router();
const factoryRouter = require("./factoryRouter");
const userRouter = require("./userRouter");

router.use("/", userRouter);
router.use("/factories", factoryRouter);

module.exports = router;
