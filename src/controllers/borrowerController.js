const borrowerService = require('../services/borrowerService');
const { validateBorrower , validateBorrowerUpdate } = require('../utils/validation');

// Get a list of all borrowers.
exports.getBorrowers = async (req, res, next) => {
  try {
    const borrowers = await borrowerService.getAllBorrowers();
    res.status(200).json({ message: 'Borrowers retrieved successfully', borrowers });
  } catch (err) {
    next(err);
  }
};

/*
  Add a new borrower.
  Expects: { name, email } in req.body
 */
exports.addBorrower = async (req, res, next) => {
  try {
    validateBorrower(req.body);
    const borrower = await borrowerService.createBorrower(req.body);
    res.status(201).json({ message: 'Borrower added successfully', borrower });
  } catch (err) {
    next(err);
  }
};

// Get a specific borrower by ID
exports.getBorrowerById = async (req, res, next) => {
  try {
    const borrower = await borrowerService.getBorrowerById(req.params.id);
    if (!borrower) return res.status(404).json({ message: 'Borrower not found' });
    res.status(200).json({ message: 'Borrower retrieved successfully', borrower });
  } catch (err) {
    next(err);
  }
};

/*
  Update a borrower by ID.
  Expects: Partial or full borrower fields in req.body
 */
exports.updateBorrower = async (req, res, next) => {
  try {
    validateBorrowerUpdate(req.body);
    const updatedBorrower = await borrowerService.updateBorrower(req.params.id, req.body);
    if (!updatedBorrower) return res.status(404).json({ message: 'Borrower not found' });
    res.status(200).json({ message: 'Borrower updated successfully', borrower: updatedBorrower });
  } catch (err) {
    next(err);
  }
};

// Delete a borrower by ID
exports.deleteBorrower = async (req, res, next) => {
  try {
    const deleted = await borrowerService.deleteBorrower(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Borrower not found' });
    res.status(200).json({ message: 'Borrower deleted successfully' });
  } catch (err) {
    next(err);
  }
};