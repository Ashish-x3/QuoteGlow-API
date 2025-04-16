
# QuoteGlow API

QuoteGlow is a quote-sharing web app API that allows users to retrieve daily quotes, random quotes, explore quotes by category, and even access AI-generated quotes. The backend is built with Express.js


## Endpoints


- GET /api/quotes Fetches a list of all quotes available.

- GET /api/daily-quote Fetches the daily quote.

- GET /api/random-quote Fetches a random quote.

- GET /api/categories Fetches a list of available quote categories.

- GET /api/ai Fetches AI-generated quotes.

## API Reference

#### Get Quotes

```http
  GET /api/quotes

```

#### Get Daily Quote

```http
  GET /api/daily-quote
```

#### Get Random Quote

```http
  GET /api/random-quote
```

#### Get Quotes by Category

```http
  GET /api/categories/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Category` | `string` | **Required**.  |

#### Get AI-Generated Quotes

```http
  GET /api/ai
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Prompt` | `string` | **Required**.  |

- Get 8 quotes about success
- Find 9 motivation quotes
- Create 5 quotes about friendship
- Discover 10 hubspot quotes
- Generate 3 zen quotes quotes
