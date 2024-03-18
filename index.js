const axios = require('axios');
const moment = require('moment');

// Function to generate a random number within a given range
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to fetch a random quote from an external API
async function fetchRandomQuote() {
  try {
    const response = await axios.get('https://api.quotable.io/random');
    return response.data.content;
  } catch (error) {
    throw new Error('Failed to fetch random quote');
  }
}

// Function to format a given date using Moment.js
function formatDate(date, format) {
  return moment(date).format(format);
}

module.exports = {
  generateRandomNumber,
  fetchRandomQuote,
  formatDate
};
