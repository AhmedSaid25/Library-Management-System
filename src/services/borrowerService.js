const { Borrower } = require('../models/initModels');

exports.getAllBorrowers = async () => {
  return await Borrower.findAll();
};

exports.createBorrower = async (data) => {
  return await Borrower.create(data);
};

exports.getBorrowerById = async (id) => {
  return await Borrower.findByPk(id);
};

exports.updateBorrower = async (id, data) => {
  const [updated] = await Borrower.update(data, { where: { id } });
  if (!updated) return null;
  return await Borrower.findByPk(id);
};

exports.deleteBorrower = async (id) => {
  return await Borrower.destroy({ where: { id } });
};
