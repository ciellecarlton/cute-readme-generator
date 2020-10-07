// take in user input 
var inquirer = require('inquirer');
var fs = require("fs");
inquirer
  .prompt([
    {
      message: "What is your name?",
      type: "input",
      name: "projectName",

    },
    {
      message: "What is the name of your project?",
      type: "input",
      name: "name",

    },
    {
      message: "Enter project description",
      type: "input",
      name: "description"
    },
    {
      message: "Provide installation instructions:",
      name: "installation",
      type: "input",
      default: "node index.js"
  },
    {
      message: "Name the contributers for this project",
      type: "input",
      name: "contributions"
    },
    {
      message: "Enter usage information",
      type: "input",
      name: "usage"
    },
  
    {
      message: "Enter project description",
      type: "input",
      name: "description"
    },
    {
      message: "Choose your license:",
      choices: ["MIT", "Apache 2.0", "GPL 2.0", "GPL 3.0", "Unlicense"],
      name: "license",
      type: "list"
  },
  {
    message: "What command should be entered to run tests?",
    name: "test",
    type: "input",
    default: "npm run test"
},
{
  message: "GitHub username:",
  name: "username",
  type: "input"
},
{
  message: "Email address:",
  name: "email",
  type: "input"
}






  ])




  .then(answers => {
    fs.writeFile("readme.md", answers, function (err, data) {
    // console.log(answers.description)
    // Use user feedback for... whatever!!
    })
  })

  .catch(error => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
// create README