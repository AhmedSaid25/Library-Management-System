const express = require('express');
const router = express.Router();
const borrowerController = require('../controllers/borrowerController');

/**
 * @swagger
 * tags:
 *   name: Borrowers
 *   description: Borrower management
 */

/**
 * @swagger
 * /borrowers:
 *   get:
 *     summary: Get all borrowers
 *     tags: [Borrowers]
 *     responses:
 *       200:
 *         description: List of borrowers
 */
router.get('/', borrowerController.getBorrowers);

/**
 * @swagger
 * /borrowers:
 *   post:
 *     summary: Add a new borrower
 *     tags: [Borrowers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, email]
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *     responses:
 *       201:
 *         description: Borrower created successfully
 *       400:
 *         description: Invalid request
 */
router.post('/', borrowerController.addBorrower);

/**
 * @swagger
 * /borrowers/{id}:
 *   get:
 *     summary: Get a borrower by ID
 *     tags: [Borrowers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Borrower ID
 *     responses:
 *       200:
 *         description: Borrower details
 *       404:
 *         description: Borrower not found
 */
router.get('/:id', borrowerController.getBorrowerById);

/**
 * @swagger
 * /borrowers/{id}:
 *   put:
 *     summary: Update a borrower by ID
 *     tags: [Borrowers]
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
 *             properties:
 *               name: { type: string }
 *               email: { type: string, format: email }
 *     responses:
 *       200:
 *         description: Borrower updated successfully
 *       404:
 *         description: Borrower not found
 */
router.put('/:id', borrowerController.updateBorrower);

/**
 * @swagger
 * /borrowers/{id}:
 *   delete:
 *     summary: Delete a borrower by ID
 *     tags: [Borrowers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Borrower ID
 *     responses:
 *       200:
 *         description: Borrower deleted successfully
 *       404:
 *         description: Borrower not found
 */
router.delete('/:id', borrowerController.deleteBorrower);

module.exports = router;
