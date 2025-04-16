require('dotenv').config();
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
const port = 4000

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

app.listen(port, () => console.log(`QuoteGlow API listening on port ${port}!`))