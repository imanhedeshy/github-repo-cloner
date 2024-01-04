
# GitHub Repository Cloner

This Node.js script allows you to clone all GitHub repositories of a specified user into a designated directory. It's particularly useful for backing up your GitHub repositories or quickly setting up your environment with all your projects.

## Features

- Clone all public and private repositories of a specified GitHub user.
- Clone repositories into a specified directory.
- Handle pagination for users with a large number of repositories.
- Easy to set up and run with minimal configuration.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm.
- You have a GitHub account and a personal access token with repo access.
- You are familiar with basic terminal operations.

## Installation

To install the GitHub Repository Cloner, follow these steps:

1. Clone this repository:
   ```
   git clone https://github.com/imanhedeshy/github-repo-cloner.git
   ```
2. Navigate to the repository directory:
   ```
   cd github-repo-cloner
   ```
3. Install the required dependencies:
   ```
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory of the project.
2. Add the following lines to the `.env` file:
   ```
   GH_USERNAME=your_github_username
   GH_TOKEN=your_github_personal_access_token
   ```
   Replace `your_github_username` and `your_github_personal_access_token` with your GitHub username and personal access token, respectively.

## Usage

To use the GitHub Repository Cloner, follow these steps:

1. Run the script with the following command:
   ```
   npm start
   ```
   or
   ```
   node cloneRepos.js
   ```

2. The script will clone all the repositories into the specified directory.

## Contributing to GitHub Repository Cloner

To contribute to the GitHub Repository Cloner, follow these steps:

1. Fork this repository.
2. Create a new branch: 
   ```
   git checkout -b <branch_name>
   ```
3. Make your changes and commit them: 
   ```
   git commit -m '<commit_message>'
   ```
4. Push to the original branch: 
   ```
   git push origin <project_name>/<location>
   ```
5. Create the pull request.

Alternatively, see the GitHub documentation on [creating a pull request](https://help.github.com/articles/creating-a-pull-request/).

## Contributors

Thanks to the following people who have contributed to this project:

- [@imanhedeshy](https://github.com/imanhedeshy)

## Contact

If you want to contact me, you can reach me at [iman.hedeshy@gmail.com](mailto:iman.hedeshy@gmail.com).

## License

This project uses the following license: [MIT License](<LICENSE.md>).
