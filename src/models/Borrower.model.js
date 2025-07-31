module.exports = (sequelize, DataTypes) => {
  const Borrower = sequelize.define('Borrower', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { 
      type: DataTypes.STRING, 
      allowNull: false, 
      unique: true,
      validate: { isEmail: true }
    },
    registered_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  }, { 
    tableName: 'borrowers',
    timestamps: true
  });

  return Borrower;
};