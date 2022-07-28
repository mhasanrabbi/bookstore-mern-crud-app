const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middlewares

app.use("/", (req, res, next) => {
  res.send("This is our starting app");
});

// environment variables
require("dotenv").config();

const uri = process.env.MONGO_URI;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to database"))
  .then(() => app.listen(3000))
  .catch(() => console.log("Connection failed"));
