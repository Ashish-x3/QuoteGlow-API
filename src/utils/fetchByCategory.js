const axios = require("axios")

async function fetchByCategory(category){
    try {
        const baseURL = process.env.CATEGORY_URL
        const response = await axios.get(`${baseURL}?tags=${category}`)
        const result = await response.data.results;
        if(result){
            return result.map((res) =>({
                quote:res.content,
                author:res.author
            }))
        }else{
            return {"Not Found":"No Quotes"}
        }
       
    } catch (error) {
        throw error
    }
}

module.exports = fetchByCategory;