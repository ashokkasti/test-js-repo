// Import the fetchConfluencePage function from confluence.js
const { fetchConfluencePage } = require('./confluence.js');

// Async function to use fetchConfluencePage
async function main() {
  try {
    console.log('Fetching Confluence page...');
    const pageData = await fetchConfluencePage();
    console.log('Successfully fetched page:', pageData.title);
    // You can do more with pageData here
  } catch (error) {
    console.error('Error in main function:', error.message);
  }
}

// Call the main function
main();