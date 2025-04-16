 const fetchQuotesRaw  = require('../utils/fetchQuotes')

 async function fetchQuotes() {
    const quotes = await fetchQuotesRaw()
    return quotes;
 }

 module.exports = {fetchQuotes};