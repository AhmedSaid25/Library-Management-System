const borrowerService = require('../services/borrowerService');
const { validateBorrower , validateBorrowerUpdate } = require('../utils/validation');

exports.getBorrowers = async (req, res, next) => {
  try {
    const borrowers = await borrowerService.getAllBorrowers();
    res.json(borrowers);
  } catch (err) {
    next(err);
  }
};

exports.addBorrower = async (req, res, next) => {
  try {
    validateBorrower(req.body);
    const borrower = await borrowerService.createBorrower(req.body);
    res.status(201).json(borrower);
  } catch (err) {
    next(err);
  }
};

exports.getBorrowerById = async (req, res, next) => {
  try {
    const borrower = await borrowerService.getBorrowerById(req.params.id);
    if (!borrower) return res.status(404).json({ message: 'Borrower not found' });
    res.json(borrower);
  } catch (err) {
    next(err);
  }
};

exports.updateBorrower = async (req, res, next) => {
  try {
    validateBorrowerUpdate(req.body);
    const updatedBorrower = await borrowerService.updateBorrower(req.params.id, req.body);
    if (!updatedBorrower) return res.status(404).json({ message: 'Borrower not found' });
    res.json(updatedBorrower);
  } catch (err) {
    next(err);
  }
};

exports.deleteBorrower = async (req, res, next) => {
  try {
    const deleted = await borrowerService.deleteBorrower(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Borrower not found' });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};