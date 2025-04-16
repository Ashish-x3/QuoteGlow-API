const getAIQuotes = require('../utils/fetchAIQuotes')

const aiQuotesService = async (input)=>{
    const result = await getAIQuotes(input);
    return result
}

module.exports = aiQuotesService;