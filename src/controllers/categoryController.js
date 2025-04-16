const categoryService = require('../services/categoryService');

const categoryController = async (req, res) => {
    const { category } = req.params;
    try {
        const quotes = await categoryService(category);
        res.json(quotes);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong while fetching quotes.' });
    }
};

module.exports = categoryController;
