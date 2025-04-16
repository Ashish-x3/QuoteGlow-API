const aiQuotesService = require('../services/aiQuotesService');

const aiQuotesController = async (req, res) => {
    const { input } = req.params;
    try {
        const result = await aiQuotesService(input);
        if (result && result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(200).json({ message: "No results returned. Please try a different query." });
        }
    } catch (err) {
        console.error("AI Quotes Error:", err); 
        res.status(500).json({ error: "Something went wrong. Please try again later." });
    }
};

module.exports = aiQuotesController;
