const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { username, email, password, userStatus } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(409).send("User Already Exist. Please Login");
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      email,
      password: encryptedPassword,
      userStatus,
    });

    const token = jwt.sign(
      { username, email, userStatus },
      process.env.TOKEN_KEY,
      {
        expiresIn: "1h",
      }
    );

    user.save();

    // return new user
    res.status(201).json({
      username: user.username,
      email: user.email,
      userStatus: user.userStatus,
      token: token,
    });
  } catch (err) {
    throw new Error("Failed creating new user");
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign(
          {
            username: user.username,
            email: user.email,
            userStatus: user.userStatus,
          },
          process.env.TOKEN_KEY,
          {
            expiresIn: "1h",
          }
        );
        res.status(200).json({
          username: user.username,
          email: user.email,
          userStatus: user.userStatus,
          token: token,
        });
      } else {
        res.status(400).send("Incorrect Password");
      }
    } else {
      res.status(400).send("Please check your email adress");
    }
  } catch (err) {
    throw new Error("Failed logging in");
  }
};

module.exports = { register, login };
