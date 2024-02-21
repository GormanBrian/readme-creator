import inquirer from "inquirer";

const questions = [
  {
    name: "title",
    type: "input",
    message: "What's the title of your project?",
  },
];

inquirer.prompt(questions);
