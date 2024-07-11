// Confluence API call to fetch a page

// Sample Confluence API token 
const CONFLUENCE_API = 'A112233445566778899aabbc';

// Confluence domain and page ID (replace with your actual values)
const CONFLUENCE_DOMAIN = 'your-domain.atlassian.net';
const PAGE_ID = '123456';

// Function to fetch a Confluence page
async function fetchConfluencePage() {
  try {
    const response = await fetch(`https://${CONFLUENCE_DOMAIN}/wiki/rest/api/content/${PAGE_ID}?expand=body.storage`, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${CONFLUENCE_API}`,
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Page Title:', data.title);
    console.log('Page Content:', data.body.storage.value);
    return data;  // Return the data for use in other files
  } catch (error) {
    console.error('Error fetching Confluence page:', error);
    throw error;  // Re-throw the error for handling in the calling function
  }
}

// Export the function
module.exports = { fetchConfluencePage };