const { BorrowedBook, Book } = require('../models/initModels');
// need double check and handle no two user can borrow the same book at the same time
exports.borrowBook = async (borrowerId, bookId, dueDate) => {
  const book = await Book.findByPk(bookId);
  if (!book || book.quantity < 1) throw new Error('Book not available');

  // Set borrowed_date to now
  const borrowedDate = new Date();

  // If dueDate is not provided, set it to 14 days from now
  if (!dueDate) {
    const d = new Date(borrowedDate);
    d.setDate(d.getDate() + 14);
    dueDate = d;
  }

  book.quantity -= 1;
  await book.save();

  return await BorrowedBook.create({
    borrower_id: borrowerId,
    book_id: bookId,
    borrowed_date: borrowedDate,
    due_date: dueDate
  });
};

exports.returnBook = async (borrowerId) => {
  const borrowedBook = await BorrowedBook.findOne({
    where: {
      borrower_id: borrowerId,
      returned_date: null
    }
  });
  if (!borrowedBook) throw new Error('No active loan found for this book and borrower');

  // Mark as returned
  borrowedBook.returned_date = new Date();
  await borrowedBook.save();

  const book = await Book.findByPk(borrowedBook.book_id);
  if (book) {
    book.quantity += 1;
    await book.save();
  }

  return borrowedBook;
};
exports.listBorrowedBooks = async (borrowerId) => {
  return await BorrowedBook.findAll({
    where: {
      borrower_id: borrowerId,
      returned_date: null
    },
    include: [{ model: Book }]
  });
};
exports.listOverdueBooks = async () => {
  const today = new Date();
  return await BorrowedBook.findAll({
    where: {
      due_date: { [Op.lt]: today },
      returned_date: null
    },
    include: [{ model: Book }]
  });
};