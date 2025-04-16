// File: src/services/dailyQuoteService.js

const { fetchFromZenQuotes } = require('../utils/fetchQuote')

const fetchDailyQuote = async () => {
  const data = await fetchFromZenQuotes()
  return {
    quote: data[0].q,
    author: data[0].a,
  }
}

module.exports = { fetchDailyQuote }
