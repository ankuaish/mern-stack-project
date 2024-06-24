const express = require("express");
const app = express();
const router = require("./router/auth-router");

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the world best mern series");
});

app.get("/register", (req, res) => {
  res.status(200).send("Welcome to the registration Page");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running at port : ${PORT}`);
});
