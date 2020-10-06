// take in user input 
var inquirer = require('inquirer');
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

  ])


  .then(answers => {
    console.log(answers.name)
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
// create README