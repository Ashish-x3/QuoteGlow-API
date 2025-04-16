const express = require('express')
const router = express.Router()
const {quotes} = require('../controllers/quotesController')

router.get('/',quotes)

module.exports = router