const express = require('express');
const router = express.Router();
const borrowedBookController = require('../controllers/borrowedBookController');
const { borrowLimit } = require('../middleware/rateLimiters');

/**
 * @swagger
 * tags:
 *   name: BorrowedBooks
 *   description: Borrowing process management
 */

/**
 * @swagger
 * /borrowed-books/borrowers/{id}/borrow:
 *   post:
 *     summary: Borrow a book for a borrower
 *     tags: [BorrowedBooks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Borrower ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [book_id, due_date]
 *             properties:
 *               book_id:
 *                 type: integer
 *               due_date:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Book borrowed successfully
 *       400:
 *         description: Invalid request
 *       404:
 *         description: Borrower or book not found
 *       429:
 *         description: Too many requests (rate limited)
 */
router.post('/borrowers/:id/borrow', borrowLimit, borrowedBookController.borrowBook);

/**
 * @swagger
 * /borrowed-books/borrowers/{id}/return:
 *   put:
 *     summary: Return a borrowed book
 *     tags: [BorrowedBooks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Borrower ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [book_id]
 *             properties:
 *               book_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Book returned successfully
 *       400:
 *         description: Invalid request
 *       404:
 *         description: Loan record not found
 */
router.put('/borrowers/:id/return', borrowedBookController.returnBook);

/**
 * @swagger
 * /borrowed-books/borrowers/{id}/loans:
 *   get:
 *     summary: List all books currently borrowed by a borrower
 *     tags: [BorrowedBooks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Borrower ID
 *     responses:
 *       200:
 *         description: List of borrowed books for the borrower
 *       404:
 *         description: Borrower not found
 */
router.get('/borrowers/:id/loans', borrowedBookController.listBorrowedBooks);

/**
 * @swagger
 * /borrowed-books/loans/overdue:
 *   get:
 *     summary: List all overdue borrowed books
 *     tags: [BorrowedBooks]
 *     responses:
 *       200:
 *         description: List of overdue loans
 */
router.get('/loans/overdue', borrowedBookController.listOverdueBooks);

module.exports = router;
