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

exports.validateBorrowBook = (borrowerId, bookId ,dueDate) => {
  if (!borrowerId) throw new Error('Borrower ID is required');
  if (!bookId) throw new Error('Book ID is required');
    if (dueDate) {
    const today = new Date();
    const parsedDate = new Date(dueDate);

    if (isNaN(parsedDate)) {
      throw new Error('Invalid due date format. Please use YYYY-MM-DD.');
    }

    if (parsedDate <= today) { 
      throw new Error('Due date must be after today.');
    }
  }
};
exports.validateDateRange = (start_date, end_date) => {
  if (!start_date || !end_date) {
    throw new Error('start_date and end_date are required');
  }

  const start = new Date(start_date);
  const end = new Date(end_date);

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    throw new Error('Invalid date format. Use YYYY-MM-DD');
  }

  if (start > end) {
    throw new Error('start_date cannot be after end_date');
  }
};
