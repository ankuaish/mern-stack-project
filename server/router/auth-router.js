const express = require("express");
const router = express.Router();
const authControllers = require("../controller/auth-controller");

// router.get("/", (req, res) => {
//   res.status(200).send("Welcome to the world best mern series using router");
// });

router.route("/").get(authControllers.home);

router.route("/register").post(authControllers.register);

module.exports = router;
