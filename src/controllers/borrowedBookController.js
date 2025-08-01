const borrowedBookService = require('../services/borrowedBookService');
const { validateBorrowBook } = require('../utils/validation');

/*
 Borrow a book for a borrower.
 Expects: bookId (and optionally dueDate) in req.body, borrowerId in req.params.id
 */
exports.borrowBook = async (req, res, next) => {
  try {
    validateBorrowBook(req.params.id, req.body.book_id, req.body.due_date);
    const result = await borrowedBookService.borrowBook(req.params.id, req.body.book_id,req.body.due_date);
    res.status(201).json({ message: 'Book borrowed successfully', borrowedBook: result });
  } catch (err) {
    next(err);
  }
};

/*
  Return a borrowed book for a borrower.
  Expects: borrowerId in req.params.id
 */
exports.returnBook = async (req, res, next) => {
  try {
    const result = await borrowedBookService.returnBook(req.params.id);
   res.status(200).json({ message: 'Book returned successfully', borrowedBook: result });
  } catch (err) {
    next(err);
  }
};

/*
  List all books currently borrowed by a borrower.
  Expects: borrowerId in req.params.id
 */
exports.listBorrowedBooks = async (req, res, next) => {
  try {
    const books = await borrowedBookService.listBorrowedBooks(req.params.id);
    res.status(200).json({ message: 'Borrowed books retrieved successfully', books });
  } catch (err) {
    next(err);
  }
};

// List all overdue borrowed books.
exports.listOverdueBooks = async (req, res, next) => {
  try {
    const overdueBooks = await borrowedBookService.listOverdueBooks();
    res.status(200).json({ message: 'Overdue books retrieved successfully', overdueBooks });
  } catch (err) {
    next(err);
  }
};