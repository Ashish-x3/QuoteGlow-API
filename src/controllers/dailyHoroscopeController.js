const dailyHoroscopeService = require('../services/dailyHoroscopeService')

const dailyHoroscopeController = async (req,res)=>{
    const {sign} = req.params
    try {
        const response = await dailyHoroscopeService(sign)
        if (response && response.length > 0 ){
            res.status(200).json(response)
        }else {
            res.status(200).json({ message: "No results returned." });
        }
    } catch (error) {
        console.error(error)
    }
}

module.exports = dailyHoroscopeController;