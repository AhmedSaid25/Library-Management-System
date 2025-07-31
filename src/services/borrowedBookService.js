const { BorrowedBook, Book } = require('../models/initModels');

exports.borrowBook = async (borrowerId, bookId, dueDate) => {
  const book = await Book.findByPk(bookId);
  if (!book || book.quantity < 1) throw new Error('Book not available');

  // Reduce quantity
  book.quantity -= 1;
  await book.save();

  return await BorrowedBook.create({
    borrower_id: borrowerId,
    book_id: bookId,
    due_date: dueDate
  });
};
