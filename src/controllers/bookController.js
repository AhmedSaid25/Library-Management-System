const bookService = require('../services/bookService');
const { validateBook , validateBookUpdate } = require('../utils/validation');

/*
  Add a new book to the library.
  Expects: { title, author, isbn } in requiered req.body
 */
exports.addBook = async (req, res, next) => {
  try {
    validateBook(req.body);
    const book = await bookService.createBook(req.body);
    res.status(201).json({ message: 'Book added successfully', book });
  } catch (err) {
    next(err);
  }
};

// Get a list of all books.
exports.getBooks = async (req, res, next) => {
  try {
    const books = await bookService.getAllBooks();
    res.status(200).json({ message: 'Books retrieved successfully', books });
  } catch (err) {
    next(err);
  }
};

// Get a specific book by ID.
exports.getBookById = async (req, res, next) => {
  try {
    const book = await bookService.getBookById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json({ message: 'Book retrieved successfully', book });
  } catch (err) {
    next(err);
  }
};

/*
 Update a book by ID.
  Expects: Partial or full book fields in req.body
 */
exports.updateBook = async (req, res, next) => {
  try {
    validateBookUpdate(req.body);
    const updatedBook = await bookService.updateBook(req.params.id, req.body);
    if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json({ message: 'Book updated successfully', book: updatedBook });
  } catch (err) {
    next(err);
  }
};

// Delete a book by ID.
exports.deleteBook = async (req, res, next) => {
  try {
    const deleted = await bookService.deleteBook(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (err) {
    next(err);
  }
};

/*
  Search for books by title, author, or ISBN.
  Query params: title, author, isbn 
 */
exports.searchBooks = async (req, res, next) => {
  try {
    const { title, author, isbn } = req.query;
    const books = await bookService.searchBooks({ title, author, isbn });
    res.status(200).json({ message: 'Books search completed', books });
  } catch (err) {
    next(err);
  }
};
