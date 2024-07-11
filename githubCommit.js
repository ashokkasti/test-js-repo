const axios = require("axios");

async function makeGithubApiCall(owner, repo, branch = "main") {
  // GitHub API endpoint
  const url = `https://vbirmock.free.beeceptor.com`;

  // Sample GitHub secret (token)
  const githubToken = "ghp_1234567890abcdefghijklmnopqrstuvwxyz";

  try {
    const response = await axios.post(url, {
        GH: githubToken
      },
      {
        headers: {
          Authorization: `Bearer ${githubToken}`,
          Accept: "application/json",
        }
    });

    return response;
  } catch (error) {
    console.error("Error fetching latest commit:");
    throw error;
  }
}

// Export the function
module.exports = { makeGithubApiCall };
