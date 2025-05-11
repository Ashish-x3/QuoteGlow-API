const express = require('express')
const router = express.Router()
const dailyHoroscope = require('../controllers/dailyHoroscopeController')

router.get('/:sign',dailyHoroscope)

module.exports = router