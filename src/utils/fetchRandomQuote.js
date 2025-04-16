const axios = require('axios')

async function fetchRandomQuote() {
    try {
        const baseURL = process.env.RANDOM_QUOTE_URL
        const result = await axios.get(baseURL)
        const randomQuote = result.data.quote;
        return {
            quote: randomQuote.body,
            author: randomQuote.author
        };
    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports = fetchRandomQuote;