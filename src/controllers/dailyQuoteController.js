const fetchQuotesRaw  = require("../utils/fetchDailyQuote");

const getDailyQuote = async (req, res) => {
  try {
    const quoteData = await fetchQuotesRaw();
    res.status(200).json(quoteData);
  } catch (error) {
    console.error("Error fetching daily quote:", error);
    res.status(500).json({ error: "Failed to fetch daily quote" });
  }
};

module.exports = { getDailyQuote };
