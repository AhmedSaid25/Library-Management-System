exports.validateBook = (book) => {
  if (!book.title) throw new Error('Title is required');
  if (!book.author) throw new Error('Author is required');
  if (!book.isbn) throw new Error('ISBN is required');
};

exports.validateBookUpdate = (book) => {
  if ('title' in book && !book.title) throw new Error('Title cannot be empty');
  if ('author' in book && !book.author) throw new Error('Author cannot be empty');
  if ('isbn' in book && !book.isbn) throw new Error('ISBN cannot be empty');
};

exports.validateBorrower = (borrower) => {
  if (!borrower.name) throw new Error('Name is required');
  if (!borrower.email) throw new Error('Email is required');
  if (borrower.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(borrower.email)) {
    throw new Error('Invalid email format');
  }
};

exports.validateBorrowerUpdate = (borrower) => {
  if ('name' in borrower && !borrower.name) throw new Error('Name cannot be empty');
  if ('email' in borrower) {
    if (!borrower.email) throw new Error('Email cannot be empty');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(borrower.email)) {
      throw new Error('Invalid email format');
    }
  }
};

exports.validateBorrowBook = (borrowerId, bookId) => {
  if (!borrowerId) throw new Error('Borrower ID is required');
  if (!bookId) throw new Error('Book ID is required');
};
