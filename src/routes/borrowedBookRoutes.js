const express = require('express');
const router = express.Router();
const borrowedBookController = require('../controllers/borrowedBookController');

router.post('/borrowers/:id/borrow', borrowedBookController.borrowBook);

router.put('/borrowers/:id/return', borrowedBookController.returnBook);

router.get('/borrowers/:id/loans', borrowedBookController.listBorrowedBooks);

router.get('/loans/overdue', borrowedBookController.listOverdueBooks);

module.exports = router;