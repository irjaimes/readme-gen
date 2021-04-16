// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Create a function to generate markdown for README
function genReadMe(data) {
  return ` 
  ### Project Description
  ${data.description}
  ### Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  ### Installation 
  ${data.installation}
  ### Usage
  ${data.usage}
  ### License 
  
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  <br />
  This application is covered by the ${data.license} license. 
  ### Tests
  ${data.tests}
  ### Questions 
  ${data.tests}
  Github Username: ${data.username}

  
  Email : ${data.email}
`;
}

module.exports = genReadMe;