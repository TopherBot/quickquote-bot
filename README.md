# QuickQuote Bot

A tiny Node.js CLI that fetches a random quote from the [Quotable API](https://github.com/lukePeavey/quotable) and prints it to the console.

## Usage
```bash
node index.js
```

## Install
```bash
npm install node-fetch@2
```

## How it works
The script sends a GET request to `https://api.quotable.io/random`, parses the JSON response, and logs the quote and author.
