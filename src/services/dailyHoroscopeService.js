const fetchHoroscopeToday = require('../utils/fetchDailyHoroscope')

const dailyHoroscopeService = async (sign) =>{
    const result = await fetchHoroscopeToday(sign)
    return result;
}

module.exports = dailyHoroscopeService;

