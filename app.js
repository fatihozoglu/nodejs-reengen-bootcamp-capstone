const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./db_config/index").connect();
const userRouter = require("./routes/userRouter");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", userRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started listening at ${port}.`);
});
