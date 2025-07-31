const borrowedBookService = require('../services/borrowedBookService');

exports.borrowBook = async (req, res, next) => {
  try {
    const result = await borrowedBookService.borrowBook(req.params.id, req.body.bookId);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

exports.returnBook = async (req, res, next) => {
  try {
    const result = await borrowedBookService.returnBook(req.params.id, req.body.bookId);
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