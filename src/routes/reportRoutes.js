const express = require('express');
const router = express.Router();
const reportsController = require('../controllers/reportsController');

/**
 * @swagger
 * tags:
 *   name: Reports
 *   description: Analytical and export reports for borrowing process
 */

/**
 * @swagger
 * /reports/borrowing-period:
 *   get:
 *     summary: Get borrowing process within a specific period (CSV)
 *     tags: [Reports]
 *     parameters:
 *       - in: query
 *         name: start_date
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: Start date in YYYY-MM-DD format
 *       - in: query
 *         name: end_date
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: End date in YYYY-MM-DD format
 *     responses:
 *       200:
 *         description: CSV file containing borrowing records
 *         content:
 *           text/csv:
 *             schema:
 *               type: string
 *               format: binary
 */
router.get('/borrowing-period', reportsController.borrowingInPeriod);

/**
 * @swagger
 * /reports/overdue-last-month:
 *   get:
 *     summary: Export all overdue borrows from the last month (CSV)
 *     tags: [Reports]
 *     responses:
 *       200:
 *         description: CSV file containing overdue borrow records
 *         content:
 *           text/csv:
 *             schema:
 *               type: string
 *               format: binary
 */
router.get('/overdue-last-month', reportsController.overdueLastMonth);

/**
 * @swagger
 * /reports/borrows-last-month:
 *   get:
 *     summary: Export all borrowing processes from the last month (CSV)
 *     tags: [Reports]
 *     responses:
 *       200:
 *         description: CSV file containing borrowing records
 *         content:
 *           text/csv:
 *             schema:
 *               type: string
 *               format: binary
 */
router.get('/borrows-last-month', reportsController.borrowsLastMonth);

module.exports = router;
