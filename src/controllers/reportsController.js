const reportsService = require('../services/reportsService');
const { validateDateRange } = require('../utils/validation');
// Borrowing in specific period
exports.borrowingInPeriod = async (req, res) => {
  try {
    const { start_date, end_date } = req.query;
    validateDateRange(start_date, end_date);
    if (!start_date || !end_date) {
      return res.status(400).json({ error: 'start_date and end_date are required' });
    }

    const csv = await reportsService.getBorrowingInPeriod(start_date, end_date);
    if (!csv) {
      return res.status(404).json({ error: 'No borrowing records found for the specified period' });
    }
    res.header('Content-Type', 'text/csv');
    res.attachment(`borrowing_${start_date}_to_${end_date}.csv`);
    res.status(200).send(csv);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Overdue last month
exports.overdueLastMonth = async (req, res) => {
  try {
    const csv = await reportsService.getOverdueLastMonth();
    if (!csv) {
      return res.status(404).json({ error: 'No overdue records found for the last month' });
    }
    res.header('Content-Type', 'text/csv');
    res.attachment(`overdue_last_month.csv`);
    res.status(200).send(csv);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Borrows last month
exports.borrowsLastMonth = async (req, res) => {
  try {
    const csv = await reportsService.getBorrowsLastMonth();
    if (!csv) {
      return res.status(404).json({ error: 'No borrowing records found for the last month' });
    }
    res.header('Content-Type', 'text/csv');
    res.attachment(`borrows_last_month.csv`);
    res.status(200).send(csv);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
