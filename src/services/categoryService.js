const fetchByCategory = require('../utils/fetchByCategory')

const categoryService = async (category)=>{
    const result = await fetchByCategory(category)
    return result;
}

module.exports = categoryService