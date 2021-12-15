const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).send("User Already Exist. Please Login");
    } else {
      const encryptedPassword = await bcrypt.hash(password, 10);

      const user = new User({
        username,
        email,
        password: encryptedPassword,
        role,
      });

      const token = jwt.sign({ username, email, role }, process.env.TOKEN_KEY, {
        expiresIn: "1h",
      });

      user.save();

      // return new user
      res.status(201).json({
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        token: token,
      });
    }
  } catch (err) {
    next(err);
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
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
          },
          process.env.TOKEN_KEY,
          {
            expiresIn: "1h",
          }
        );
        res.status(200).json({
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
          token: token,
        });
      } else {
        res.status(400).send("Incorrect Password");
      }
    } else {
      res.status(400).send("Please check your email adress");
    }
  } catch (err) {
    next(err);
  }
};

const verify = (req, res) => {
  res.status(200).send("Token is valid");
};

module.exports = { register, login, verify };
