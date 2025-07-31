const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const { sequelize } = require('./models/initModels');
const errorHandler = require('./middleware/errorHandler');
const requestLogger = require('./middleware/requestLogger');

const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(express.json());
app.use(requestLogger);

app.use('/books', bookRoutes);

// Error handler
app.use(errorHandler);

sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .then(() => sequelize.sync({ alter: true }))
  .then(() => console.log('Tables synced'))
  .catch(err => console.error('DB Error:', err));

app.listen(3000, () => console.log('Server running on port 3000'));
