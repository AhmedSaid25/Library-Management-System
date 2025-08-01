const rateLimit = require('express-rate-limit');


const borrowLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Too many borrow attempts, try again later.' }
});

const bookSearchLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Too many search requests, try again later.' }
});

module.exports = {
  borrowLimit,
  bookSearchLimit
};
