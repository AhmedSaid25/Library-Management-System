const bookService = require('../services/bookService');
const { validateBook } = require('../utils/validation');

exports.addBook = async (req, res, next) => {
  try {
    validateBook(req.body);
    const book = await bookService.createBook(req.body);
    res.status(201).json(book);
  } catch (err) {
    next(err);
  }
};

exports.getBooks = async (req, res, next) => {
  try {
    const books = await bookService.getAllBooks();
    res.json(books);
  } catch (err) {
    next(err);
  }
};

exports.getBookById = async (req, res, next) => {
  try {
    const book = await bookService.getBookById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    next(err);
  }
};

exports.updateBook = async (req, res, next) => {
  try {
    const updatedBook = await bookService.updateBook(req.params.id, req.body);
    if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
    res.json(updatedBook);
  } catch (err) {
    next(err);
  }
};

exports.deleteBook = async (req, res, next) => {
  try {
    const deleted = await bookService.deleteBook(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Book not found' });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

exports.searchBooks = async (req, res, next) => {
  try {
    const { title, author, isbn } = req.query;
    const books = await bookService.searchBooks({ title, author, isbn });
    res.json(books);
  } catch (err) {
    next(err);
  }
};
