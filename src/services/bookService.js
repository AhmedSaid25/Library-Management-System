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
  const [updated] = await Book.update(data, { where: { id } });
  if (!updated) return null;
  return await Book.findByPk(id);
};

exports.deleteBook = async (id) => {
  return await Book.destroy({ where: { id } });
};

exports.searchBooks = async ({ title, author, isbn }) => {
  const where = {};
  if (title) where.title = { [Op.like]: `%${title}%` };
  if (author) where.author = { [Op.like]: `%${author}%` };
  if (isbn) where.isbn = isbn;
  return await Book.findAll({ where });
};
