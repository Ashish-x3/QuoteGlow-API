const {fetchQuotes} = require('../services/quotesService')

const quotes = async (req,res) =>{
    try {
        const result = await fetchQuotes();
        res.status(200).json(result)
    } catch (error) {
        console.log('error',error)
        res.status(500).json(error)
    }
}

module.exports = {quotes}