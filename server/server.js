require("dotenv").config();
const express = require("express");

const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

app.use(express.json());

app.use("/api/auth", router);

app.use(errorMiddleware);

// app.get("/", (req, res) => {
//   res.status(200).send("Welcome to the world best mern series");
// });

// app.get("/register", (req, res) => {
//   res.status(200).send("Welcome to the registration Page");
// });

const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port : ${PORT}`);
  });
});
