const randomQuote = require('../services/randomQuote')

const getRandomQuote = async (req, res)=>{
    try {
        const result = await randomQuote();
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
}
module.exports = getRandomQuote

