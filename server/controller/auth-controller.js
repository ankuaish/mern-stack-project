const User = require("../models/user-model");
const bcrypt = require("bcrypt.js");

const home = async (req, res) => {
  try {
    res
      .status(200)
      .send("Welcome to the world best mern series using controller");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "email already exists" });
    }
    const saltRound = 10;
    const hash_password = await bcrypt.hash(password, saltRound);
    const userCreated = await User.create({
      username,
      email,
      phone,
      password: hash_password,
    });
    res.status(201).json({ msg: userCreated });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { home, register };
