const axios = require('axios');

async function fetchAIQuotes(input) {
    if (!input) return [{ quote: "Ask something valid to get quotes." }];
    try {
        const baseURL = process.env.AI_URL;
        const url = `${baseURL}?prompt=${encodeURIComponent(input)}&quotes=array of quotes`;
        const response = await axios.get(url);
        const quotes = response.data.quotes;

        if (!Array.isArray(quotes)) {
            return [{ quote: "No quotes found. Try a different prompt." }];
        }

        return quotes
    } catch (error) {
        console.error("Error fetching AI quotes:", error.message);
        return [{ quote: "Failed to fetch quotes. Please try again later." }];
    }
}

module.exports = fetchAIQuotes;
