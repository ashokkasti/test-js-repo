const axios = require("axios");

async function getLatestCommitId(owner, repo, branch = "main") {
  // GitHub API endpoint
  const url = `https://api.github.com/repos/${owner}/${repo}/commits/${branch}`;

  // Sample GitHub secret (token)
  const githubToken = "ghp_1234567890abcdefghijklmnopqrstuvwxyz";

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `token ${githubToken}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    return response.data.sha;
  } catch (error) {
    console.error("Error fetching latest commit:", error.message);
    throw error;
  }
}

// Export the function
module.exports = { getLatestCommitId };
