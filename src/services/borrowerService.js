const { Borrower } = require('../models/initModels');

exports.createBorrower = async (data) => {
  return await Borrower.create(data);
};
