module.exports = (sequelize, DataTypes) => {
  const BorrowedBook = sequelize.define('BorrowedBook', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    borrower_id: { type: DataTypes.INTEGER, allowNull: false },
    book_id: { type: DataTypes.INTEGER, allowNull: false },
    borrowed_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    due_date: { type: DataTypes.DATEONLY, allowNull: false },
    returned_date: { type: DataTypes.DATE }
  }, { 
    tableName: 'borrowed_books',
    timestamps: true
  });

  return BorrowedBook;
};
