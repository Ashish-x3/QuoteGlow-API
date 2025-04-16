const express = require('express')
const router = express.Router()
const getRandomQuote = require('../controllers/randomQuoteController')

router.get('/',getRandomQuote)

module.exports = router
