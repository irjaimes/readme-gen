
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
  - [Questions](#questions)
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
  For any questions, please feel free to contact me.
  
  Github Username: [${data.username}](${data.repolink})

  
  Email : ${data.email}
`;
}

module.exports = genReadMe;