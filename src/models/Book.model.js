module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    author: { type: DataTypes.STRING, allowNull: false },
    isbn: { type: DataTypes.STRING, allowNull: false, unique: true },
    quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    shelf_location: { type: DataTypes.STRING }
  }, { 
    tableName: 'books',
    timestamps: true ,
      indexes: [
      { fields: ['title'] },
      { fields: ['author'] },
      { fields: ['isbn'] }
    ]
  });

  return Book;
};
