

function Game(letter, guessed) {
    this.letter = "letter",
        this.guessed = false,
        this.placeholder = function () {
            if (guessed === false) {
                console.log("_");
            }

        }
    this.correct = function () {
        var guessedLetter = "letter";
        if (guessedLetter === true) {
            guessed = true;
            console.log(guessedLetter);
            console.log("Correct!")
        }
    }
}