

function Letter(letter) {
    this.letter = letter;
    this.guessed = false,
        this.placeholder = function () {
            if (this.guessed === false) {
                return "_";
            }
            return this.letter
        }

    this.correct = function (guessedLetter) {

        if (guessedLetter === this.letter) {
            this.guessed = true;
            // console.log(guessedLetter);
            return true;
        }
        return false;

    }
}

module.exports = Letter