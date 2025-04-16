const express = require('express')
const router = express.Router()
const aiQuotesController = require('../controllers/aiQuotesController')

router.get('/:input',aiQuotesController)

module.exports = router