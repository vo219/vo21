# Vo21

A collection of magical utility functions for Node.js.

## Installation

You can install Magic Utils using npm: `npm install vo21`

## Usage

```javascript
const magicUtils = require('magic-utils');

// Generate a random number between 1 and 100
const randomNumber = magicUtils.generateRandomNumber(1, 100);
console.log('Random Number:', randomNumber);

// Fetch a random quote
magicUtils.fetchRandomQuote()
  .then(quote => console.log('Random Quote:', quote))
  .catch(error => console.error('Error fetching quote:', error.message));

// Format a date using Moment.js
const formattedDate = magicUtils.formatDate(new Date(), 'YYYY-MM-DD');
console.log('Formatted Date:', formattedDate);
```

