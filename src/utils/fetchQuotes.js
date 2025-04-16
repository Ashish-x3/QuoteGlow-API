const axios = require('axios');

async function fetchQuotes() {
  try {
    const baseURL = process.env.QUOTE_URL;
    const response = await axios.get(`${baseURL}+quotes`);
    const quotes = response.data;

    return quotes.map(quote => ({
      quote: quote.q,
      author: quote.a
    }));
  } catch (error) {
    console.error("Error fetching quotes:", error.message);
    throw error;
  }
}

module.exports = fetchQuotes;
