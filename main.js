// take in user input 
var inquirer = require('inquirer');
inquirer
  .prompt([
    {
      message: "What is the projects name?",
      type: "input",
      name: "projectName",

    },
    {
      message: "What is your name?",
      type: "input",
      name: "name",

    },
    {
      message: "What is your name?",
      type: "input",
      name:
   }

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