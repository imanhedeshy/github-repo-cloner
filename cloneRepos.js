// cloneRepos.js
// Clones all of a user's GitHub repositories into a specified directory.
// Requires a .env file with a GitHub username and token.


require('dotenv').config();
const axios = require('axios');
const shell = require('shelljs');
const path = require('path');
const fs = require('fs');

const username = process.env.USERNAME; // GitHub username from .env
const token = process.env.GH_TOKEN;    // GitHub token from .env
const cloneDirectory = '../';  // Directory to clone repositories into (parent directory)

// Ensure the clone directory exists
const fullPath = path.join(__dirname, cloneDirectory);
if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
}

async function fetchRepos(page = 1) {
  try {
    // Change to the specified directory
    shell.cd(fullPath);

    const response = await axios.get(`https://api.github.com/user/repos?type=all&per_page=100&page=${page}`, {
      headers: { 'Authorization': `token ${token}` }
    });

    if (response.status === 403 && response.headers['x-ratelimit-remaining'] === '0') {
      throw new Error('GitHub API rate limit reached.');
    }

    if (response.data.length > 0) {
      response.data.forEach(repo => {
        console.log(`Cloning ${repo.name} into ${fullPath}...`);
        shell.exec(`git clone ${repo.clone_url}`, { silent: true });
      });

      // Fetch next page of repos
      await fetchRepos(page + 1);
    }
  } catch (error) {
    console.error('Error fetching repositories:', error.message);
  }
}

fetchRepos();