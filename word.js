var Letter = require('./letter.js');


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

        if (guessedCorrectly) {
            console.log(this.underscores.join(" "));
            return true;


        } else {
            console.log(this.underscores.join(" "));
            return false;
        }
    }

}
module.exports = Word