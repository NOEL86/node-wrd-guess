var Word = require('./word.js');
var inquirer = require("inquirer");

var words = ["alladin", "thelionking", "thelittlemermaid",
    "ladyandthetramp", "foxandthehound"];

var numGuesses = 20;



var randomWord = words[Math.floor(Math.random() * words.length)]
console.log(randomWord);

var wordConObj = new Word(randomWord);

function askPlayerForLetter() {
    inquirer.prompt([
        {
            type: "input",
            message: "Guess a Letter?",
            name: "letter"
        }
    ]).then(function (answers) {
        console.log(answers.letter);
        if (wordConObj.userGuess(answers.letter)) {
            console.log("That letter was right!");
            askPlayerForLetter();

        } else {
            console.log("Darn! Nope.");
            askPlayerForLetter();
        }

    });

};

inquirer.prompt([
    {
        type: "input",
        message: "Want to Play Hangman?",
        name: "start",
        default: true
    }, {
        type: "confirm",
        message: "Are you sure?",
        type: "input",
        name: "confirm",
        default: true
    }
]).then(function (answers) {

    if (answers.confirm === true) {
        console.log("\nWelcome to Disney Movie Hangman!");
        console.log(wordConObj);
        wordConObj.splitWord();
        askPlayerForLetter();
    } else {
        console.log("\nMaybe some other time then...");
    }

    // initializes the variable newProgrammer to be a programmer object which will take
    // in all of the user's answers to the questions above
    // printInfo method is run to show that the newProgrammer object was successfully created and filled
    // game.printInfo();
});
