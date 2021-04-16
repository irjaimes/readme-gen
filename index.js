// Dependencies & packages
const fs = require('fs');
const inquirer = require('inquirer');
const genReadMe = require('./utils/genReadMe');


// Create an array of questions for user input
const promptUser = (readmeData) => {  
  // if (!readmeData.projects) {
  //   readmeData.projects = [];
  // }
 return inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    // validate property to check title was provided
    validate: (titleInput) => {
      if(titleInput) {
        return true;
      } else {
        console.log("Please add the title to your project!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is the link to the project Github repository?',
    // validate property to check title was provided
    validate: (githubName) => {
      if(githubName) {
      return true;
    } else {
      console.log("Please provide link to your project Github repo!");
      return false;
    }
  }
  },
  {
      type: 'input',
      name: 'description',
      message: 'Provide a description for your project',
      validate: projectInput => {
        if(projectInput) {
          return true;
        } else {
          console.log("Please add a description of your project!");
          return false;
        }
      }
  },
  {
    type: 'input',
    name: 'installation',
    // no validation needed if this input in not required
    message: 'How is the application installed (if applicable)?',
  },
  {
    type: 'input',
    name: 'usage',
    // no validation needed if this input in not required
    message: 'What instructions are required for usage (if applicable)?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license is neededs (if applicable)?',
    choices: [
      'Apache',
      'GNU',
      'MIT',
      'Mozilla'
    ]
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Who has contributed to your project?',
    validate: projectInput => {
      if(projectInput) {
        return true;
      } else {
        console.log("Please add at least one contributor!");
        return false;
      }
    }
    
  },
  {
    type: 'confirm',
    name: 'tests',
    message: 'Are there any tests associated with the project?',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'If there is an issue, where can I look for help?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address? (required)',
    validate: emailInput => {
      if(emailInput) {
        return true;
      } else {
        console.log("Please include your email address!");
        return false;
      }
    }
  },
])
};
 promptUser()
    .then(readmeData => {
      // Bonus: Generate the name of your user file from their input
      // let githubName = data.name;
     let readme = genReadMe(readmeData);
    fs.writeFile('README.md', readme, err => {
      if (err) throw new Error(err);

      console.log('Readme was created in root directory!');
    });
  });




