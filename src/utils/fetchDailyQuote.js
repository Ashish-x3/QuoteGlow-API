const axios = require("axios");

async function fetchQuote() {
  try {
    const baseURL = process.env.QUOTE_URL;
    const response = await axios.get(`${baseURL}today`);
    const quote = response.data[0];
    return {
      quote: quote.q,
      author: quote.a,
    };
  } catch (error) {
    console.error("Error fetching quote from API:", error.message);
    throw error;
  }
}


module.exports = fetchQuote;
