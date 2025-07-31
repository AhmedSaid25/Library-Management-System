require('dotenv').config();
const express = require('express');
// Adds HTTP security headers.
const helmet = require('helmet');
// Logs incoming HTTP requests in the console.
const morgan = require('morgan');

const sequelize = require('./config/db.config');

const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));

// Test DB connection
sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('DB Connection Error:', err));

// Routes placeholder
app.get('/', (req, res) => {
  res.send('Library Management System API is running...');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
