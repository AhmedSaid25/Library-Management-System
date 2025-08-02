const { BorrowedBook, Borrower, Book, Sequelize } = require('../models/initModels');
const { Parser } = require('json2csv');
const { Op } = Sequelize;

function toCSV(data) {
  const parser = new Parser();
  return parser.parse(data);
}

exports.getBorrowingInPeriod = async (start_date, end_date) => {
  const data = await BorrowedBook.findAll({
    where: {
      borrowed_date: { [Op.between]: [start_date, end_date] }
    },
    include: [
      { model: Borrower, attributes: ['name', 'email'] },
      { model: Book, attributes: ['title', 'author', 'isbn'] }
    ],
    raw: true,
    nest: true
  });
    if (!data || data.length === 0) {
    return null; // No data found
    }
  return toCSV(data);
};

exports.getOverdueLastMonth = async () => {
  const now = new Date();
  const firstDayLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const lastDayLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);

  const data = await BorrowedBook.findAll({
    where: {
      due_date: { [Op.lt]: new Date() },
      returned_date: null,
      borrowed_date: { [Op.between]: [firstDayLastMonth, lastDayLastMonth] }
    },
    include: [
      { model: Borrower, attributes: ['name', 'email'] },
      { model: Book, attributes: ['title', 'author', 'isbn'] }
    ],
    raw: true,
    nest: true
  });
    if (!data || data.length === 0) {
    return null; // No data found
    }

  return toCSV(data);
};

exports.getBorrowsLastMonth = async () => {
  const now = new Date();
  const firstDayLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const lastDayLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);

  const data = await BorrowedBook.findAll({
    where: {
      borrowed_date: { [Op.between]: [firstDayLastMonth, lastDayLastMonth] }
    },
    include: [
      { model: Borrower, attributes: ['name', 'email'] },
      { model: Book, attributes: ['title', 'author', 'isbn'] }
    ],
    raw: true,
    nest: true
  });
  if (!data || data.length === 0) {
    return null; // No data found
  }

  return toCSV(data);
};
