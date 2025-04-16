#QuoteGlow API
QuoteGlow is a quote-sharing web app API that allows users to retrieve daily quotes, random quotes, explore quotes by category, and even access AI-generated quotes. The backend is built with Express.js and integrates seamlessly with MongoDB for dynamic content fetching.

Features
Daily Quote: Provides a daily quote that can be fetched via the /api/daily-quote route.

Random Quotes: Fetches random quotes using the /api/random-quote route.

Categories: Allows users to explore quotes by categories through the /api/categories route.

AI Quotes: Fetches AI-generated quotes via the /api/ai route.

Endpoints
1. GET /api/quotes
Fetches a list of all quotes available.

2. GET /api/daily-quote
Fetches the daily quote.

3. GET /api/random-quote
Fetches a random quote.

4. GET /api/categories
Fetches a list of available quote categories.

5. GET /api/ai
Fetches AI-generated quotes.
