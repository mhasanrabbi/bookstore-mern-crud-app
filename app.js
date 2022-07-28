const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const app = express();

// Middlewares
app.use(express.json());
app.use("/books", router);

// environment variables
require("dotenv").config();

const uri = process.env.MONGO_URI;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to database"))
  .then(() => app.listen(5000))
  .catch(() => console.log("Connection failed"));
