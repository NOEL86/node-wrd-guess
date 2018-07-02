var wordFile = require('word.js');
var inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "input",
        message: "Want to Play Hangman?",
        name: "start",
        default: true
    }, {
        type: "confirm",
        message: "Are you sure:",
        type: "input",
        name: "confirm",
        default: true
    }, {
        type: "input",
        message: "Guess a Letter?",
        name: "letter"
    }
]).then(function (answers) {
    if (answers.confirm) {
        console.log("\nWelcome to Disney Movie Hangman");
    } else {
        console.log("\nYou must select a Letter")
    }

    // initializes the variable newProgrammer to be a programmer object which will take
    // in all of the user's answers to the questions above
    var game = new Game(answers.start, answers.confirm, answers.letter);
    // printInfo method is run to show that the newProgrammer object was successfully created and filled
    // game.printInfo();
});