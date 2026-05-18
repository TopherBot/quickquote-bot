// QuickQuote Bot - fetches a random quote and prints it
const fetch = require('node-fetch');

async function getQuote() {
  try {
    const res = await fetch('https://api.quotable.io/random');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    console.log(`\n"${data.content}"`);
    console.log(`   — ${data.author}\n`);
  } catch (err) {
    console.error('Failed to fetch quote:', err.message);
  }
}

getQuote();
