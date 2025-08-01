const borrowedBookService = require('../services/borrowedBookService');
const { validateBorrowBook } = require('../utils/validation');
exports.borrowBook = async (req, res, next) => {
  try {
    validateBorrowBook(req.params.id, req.body.bookId);
    const result = await borrowedBookService.borrowBook(req.params.id, req.body.bookId,req.body.dueDate);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

exports.returnBook = async (req, res, next) => {
  try {
    const result = await borrowedBookService.returnBook(req.params.id);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.listBorrowedBooks = async (req, res, next) => {
  try {
    const books = await borrowedBookService.listBorrowedBooks(req.params.id);
    res.json(books);
  } catch (err) {
    next(err);
  }
};

exports.listOverdueBooks = async (req, res, next) => {
  try {
    const overdueBooks = await borrowedBookService.listOverdueBooks();
    res.json(overdueBooks);
  } catch (err) {
    next(err);
  }
};