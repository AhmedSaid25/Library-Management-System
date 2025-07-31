exports.validateBook = (book) => {
  if (!book.title) throw new Error('Title is required');
  if (!book.author) throw new Error('Author is required');
  if (!book.isbn) throw new Error('ISBN is required');
};
