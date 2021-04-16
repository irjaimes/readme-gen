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
    message: 'Add title project title:',
    // validate property to check title was provided
    validate: (title) => {
      if(title) {
        return true;
      } else {
        console.log("Please add project title!");
        return false;
      }
    }
  },
  {
      type: 'input',
      name: 'description',
      message: 'Add project description:',
      validate: description => {
        if(description) {
          return true;
        } else {
          console.log("Please add project description!");
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
    type: 'input',
    name: 'contributing',
    message: 'Who contributed to this project?',
    validate: contributors => {
      if(contributors) {
        return true;
      } else {
        console.log("Please add at least one contributor!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Add tests required for this project:',
    
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license is required for this project?',
    choices: [
      'Apache',
      'GNU',
      'MIT',
      'Mozilla', 
      'None'
    ]
  },
  {
    type: 'input',
    name: 'username',
    message: 'Add your Github username:',
    // validate property to check title was provided
    validate: (username) => {
      if(username) {
      return true;
    } else {
      console.log("Please add Github username!");
      return false;
    }
  }
  },
  {
    type: 'input',
    name: 'repolink',
    message: 'Add link to Github repository associated with this project:',
    // validate property to check title was provided
    validate: (repolink) => {
      if(repolink) {
      return true;
    } else {
      console.log("Please add repo link!");
      return false;
    }
  }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Add your email address:',
    validate: email => {
      if(email) {
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




