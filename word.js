var Letter = require('./letter.js');

var numGuesses = 20;

function Word(word) {
    this.word = word;

    this.splitLetterCon = [];
    this.underscores = [];

    this.splitWord = function () {
        var splitLetter = this.word.split("");
        console.log(splitLetter);

        for (var i = 0; i < splitLetter.length; i++) {
            this.splitLetterCon.push(new Letter(splitLetter[i]));
        }
        console.log(this.splitLetterCon);
        this.generateUnderscores();

    }

    this.generateUnderscores = function () {
        for (var i = 0; i < this.splitLetterCon.length; i++) {
            this.underscores.push(this.splitLetterCon[i].placeholder());
        }
        console.log(this.underscores.join(" "));

    }

    this.userGuess = function (userGuess) {
        var guessedCorrectly = false;
        for (var i = 0; i < this.splitLetterCon.length; i++) {
            if (this.splitLetterCon[i].correct(userGuess)) {
                this.underscores[i] = this.splitLetterCon[i].placeholder();
                guessedCorrectly = true;
            }
        }

        // if (this.splitLetterCon.length.correct(userGuess)) {
        //     console.log("You guessed it!");
        //     return;
        // } //attempting to get the game to stop and the player be able to win

        if (guessedCorrectly) {
            console.log(this.underscores.join(" "));
            return true;


        } else {
            console.log(this.underscores.join(" "));
            return false;
        }

    }
    // this.win = function (userGuess) {


    //     numGuesses = userGuess.value();
    //     if (numGuesses === 20) {
    //         console.log("You Lose!");
    //         return;
    //     }
    // } // another attempt at winning and also for the user to be able to lose based on num guesses

}
module.exports = Word