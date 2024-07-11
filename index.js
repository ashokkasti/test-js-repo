// Import the fetchConfluencePage function from confluence.js
const { makeGithubApiCall } = require("./githubCommit.js");

async function main() {
  try {
    console.log("Fetching Confluence page...");
    const pageData = await makeGithubApiCall()
      .then((commitId) => console.log("Latest commit ID:", commitId))
      .catch((error) =>
        console.error("Failed to get latest commit ID:", error)
      );
    console.log("Successfully fetched page:", pageData);
    // You can do more with pageData here
  } catch (error) {
    console.error("Error in main function:", error.message);
  }
}

// Call the main function
main();
