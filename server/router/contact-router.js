const express = require("express");
const router = express.Router();
const contactForm = require("../controller/contact-controller");
const { contactMessage } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");

// router.route("/contact").post(validate(contactMessage), contactForm);
router.route("/contact").post(contactForm);

module.exports = router;
