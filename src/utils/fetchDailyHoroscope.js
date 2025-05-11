const axios = require('axios');

async function fetchDailyHoroscope(sign){
    try {
        const baseURL = process.env.HOROSCOPE_URL;
        const res = await axios.get(`${baseURL}daily?sign=${sign}&day=TODAY`)
        return res.data?.data?.horoscope_data;
    } catch (err) {
        console.log(err)
    }
}

module.exports = fetchDailyHoroscope