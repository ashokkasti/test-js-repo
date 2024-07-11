// Import the fetchConfluencePage function from confluence.js
const { makeGithubApiCall } = require("./githubCommit.js");

async function main() {
  try {
    console.log("Fetching Confluence page...");
    const pageData = await makeGithubApiCall()
      .then((result) => console.log("Result:"))
      .catch((error) =>
        console.error("Failed to get Result:")
      );
    console.log("Successfully fetched page:");
    // You can do more with pageData here
  } catch (error) {
    console.error("Error in main function:");
  }
}

// Call the main function
main();
