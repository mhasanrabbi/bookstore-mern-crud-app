const Book = require("../models/Book");

const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }

  if (!books) {
    return res.status(404).json({ message: "No books found" });
  }

  return res.status(200).json({ books });
};

const addBook = async (req, res, next) => {
  const { name, author, description, price, available } = req.body;
  let book;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available,
    });
    await book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ book });
};

const getBookById = async (req, res, next) => {
  const bookId = req.params.id;
  let book;
  try {
    book = await Book.findById(bookId);
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(404).json({ message: "No book found" });
  }

  return res.status(200).json({ book });
};

const updateBook = async (req, res, next) => {
  const bookId = req.params.id;
  const { name, author, description, price, available } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(bookId, {
      name,
      author,
      description,
      price,
      available,
    });
    book = await book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(404).json({ message: "No book found" });
  }

  return res.status(200).json({ book });
};

const deleteBook = async (req, res, next) => {
  const bookId = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndDelete(bookId);
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(404).json({ message: "No book found" });
  }

  return res.status(200).json({ message: "Book deleted" });
};

exports.addBook = addBook;
exports.getAllBooks = getAllBooks;
exports.getBookById = getBookById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
