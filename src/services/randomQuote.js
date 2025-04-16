const fetchRandomQuote = require('../utils/fetchRandomQuote')
async function randomQuote() {
    const result = await fetchRandomQuote()
    return result
}

module.exports = randomQuote;