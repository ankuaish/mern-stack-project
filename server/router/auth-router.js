const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Welcome to the world best mern series");
});

router.get("/register", (req, res) => {
  res.status(200).send("Welcome to the registration Page");
});

module.exports = router;
