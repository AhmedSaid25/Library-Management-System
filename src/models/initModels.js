const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

// Import model definitions
const Book = require('./Book.model')(sequelize, DataTypes);
const Borrower = require('./Borrower.model')(sequelize, DataTypes);
const BorrowedBook = require('./BorrowedBook.model')(sequelize, DataTypes);

// Define relationships
Borrower.hasMany(BorrowedBook, { foreignKey: 'borrower_id' });
BorrowedBook.belongsTo(Borrower, { foreignKey: 'borrower_id' });

Book.hasMany(BorrowedBook, { foreignKey: 'book_id' });
BorrowedBook.belongsTo(Book, { foreignKey: 'book_id' });

// Export Sequelize instance and models
module.exports = {
  sequelize,
  Sequelize,
  Book,
  Borrower,
  BorrowedBook
};
