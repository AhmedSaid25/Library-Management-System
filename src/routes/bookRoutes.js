const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const { bookSearchLimit } = require('../middlewares/rateLimiters');

router.post('/', bookController.addBook);
router.get('/', bookController.getBooks);
router.get('/search',bookSearchLimit, bookController.searchBooks);
router.get('/:id', bookController.getBookById); 
router.put('/:id', bookController.updateBook);   
router.delete('/:id', bookController.deleteBook); 

module.exports = router;
