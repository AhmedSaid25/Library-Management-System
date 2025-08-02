const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const swaggerDocs = require('./swagger');
dotenv.config();

const { sequelize } = require('./models/initModels');
const errorHandler = require('./middleware/errorHandler');
const requestLogger = require('./middleware/requestLogger');

const bookRoutes = require('./routes/bookRoutes');
const borrowerRoutes = require('./routes/borrowerRoutes');
const borrowedBookRoutes = require('./routes/borrowedBookRoutes');
const reportRoutes = require('./routes/reportRoutes');

const app = express();
app.use(helmet());
app.use(express.json());
app.use(requestLogger);

app.use('/books', bookRoutes);
app.use('/borrowers', borrowerRoutes);
app.use('/borrowed-books', borrowedBookRoutes);
app.use('/reports', reportRoutes);

// Error handler
app.use(errorHandler);

swaggerDocs(app);

console.log('Swagger available at http://localhost:3000/api-docs');


sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .then(() => sequelize.sync({ alter: true }))
  .then(() => console.log('Tables synced'))
  .catch(err => console.error('DB Error:', err));

app.listen(3000, () => console.log('Server running on port 3000'));
