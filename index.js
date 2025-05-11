require('dotenv').config();
const express = require('express')
const cors = require('cors')

const app = express()

const allowedOrigins = ['http://localhost:3000', 'https://quotesglo.web.app'];

app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })); 

app.use(express.json())
const port = process.env.PORT || 4000

app.get('/', (req, res) => res.send('QuoteGlow API is running 🚀!'))

const quotes = require('./src/routes/quotes')
app.use('/api/quotes',quotes)

const dailyQuoteRoute = require('./src/routes/dailyQuote')
app.use('/api/daily-quote', dailyQuoteRoute)

const randomQuotes = require('./src/routes/randomQuote')
app.use('/api/random-quote',randomQuotes)

const categoriesRoutes = require('./src/routes/categories')
app.use('/api/categories',categoriesRoutes)

const aiQuotes = require('./src/routes/aiRoute')
app.use('/api/ai', aiQuotes)

const dailyHoroScope = require('./src/routes/dailyhoroscope')
app.use('/api/daily-horoscope', dailyHoroScope)

app.listen(port, () => console.log(`QuoteGlow API listening on port ${port}!`))