const express = require("express");
const router = express.Router();
const authControllers = require("../controller/auth-controller");
const validate = require("../middlewares/validate-middleware");
const signupSchema = require("../validators/auth-validator");

// router.get("/", (req, res) => {
//   res.status(200).send("Welcome to the world best mern series using router");
// });

router.route("/").get(authControllers.home);

router
  .route("/register")
  .post(validate(signupSchema), authControllers.register);

router.route("/login").post(authControllers.login);

module.exports = router;
