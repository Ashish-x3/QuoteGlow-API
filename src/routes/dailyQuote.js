const express = require('express');
const router = express.Router();
const { getDailyQuote } = require('../controllers/dailyQuoteController');

router.get('/', getDailyQuote);

module.exports = router;
