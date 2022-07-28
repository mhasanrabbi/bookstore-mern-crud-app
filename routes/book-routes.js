const express = require("express");
const router = express.Router();
const Book = require("../models/Book");
const bookController = require("../controllers/books-controller");

router.get("/", bookController.getAllBooks);

module.exports = router;
