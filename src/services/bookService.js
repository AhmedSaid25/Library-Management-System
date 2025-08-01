const { Book } = require('../models/initModels');
const { Op } = require('sequelize');

exports.createBook = async (data) => {
  return await Book.create(data);
};

exports.getAllBooks = async () => {
  return await Book.findAll();
};

exports.getBookById = async (id) => {
  return await Book.findByPk(id);
};

exports.updateBook = async (id, data) => {
  // Returns the updated book if found, otherwise null
  const [updated] = await Book.update(data, { where: { id } });
  if (!updated) return null;
  return await Book.findByPk(id);
};

exports.deleteBook = async (id) => {
  return await Book.destroy({ where: { id } });
};

exports.searchBooks = async ({ title, author, isbn }) => {
  // Builds a dynamic where clause based on provided search parameters
  const where = {};
  if (title) where.title = { [Op.like]: `%${title}%` };
  if (author) where.author = { [Op.like]: `%${author}%` };
  if (isbn) where.isbn = isbn;
  return await Book.findAll({ where });
};
