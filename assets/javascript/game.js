var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var guessedLetters = [];

var winsText = document.getElementById("wins-text")
var lossesText = document.getElementById("losses-text")
var guessesLeftText = document.getElementById("guessesleft-text")
var guessedLettersText = document.getElementById("guessedletters-text")


var computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var compChoice = computerChoices[computerSelection];
console.log(computerSelection)

document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    console.log(userGuess);
    // how to make if user does not pick a-z???
    if (userGuess === [/a-zA-Z/]) {
        console.log(userGuess)
    }
    else {alert("Please pick a letter");}

    if (userGuess === computerSelection) {
        alert("you win");
        wins++;
        guessesLeft = 5;
        winsText.textContent = "Wins: " + wins;
        computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        compChoice = computerChoices[computerSelection];
        reset()
        // console.log(computerSelection)
    }
    else {
        // console.log(guessesLeft);
        guessesLeft --;
        guessesLeftText.textContent = ("Guesses Left: " + guessesLeft);
        guessedLetters.push(userGuess);
        display();
        //push userguess to array
        //call the function for letters
        
    }
    if (guessesLeft === 0) {
        losses ++;
        lossesText.textContent = "Losses: " + losses;
        guessedLetters = "";
        guessedLettersText.textContent = guessedLetters;
        alert("You Lost!");
        guessesLeft = 5;
        guessesLeftText.textContent = ("Guesses Left: " + guessesLeft);
        reset()
        computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        compChoice = computerChoices[computerSelection];
    }
}
  
function display() {
    // display.push (guessedLettersText)
    console.log(guessedLetters);
    guessedLettersText.innerHTML = guessedLetters;
}

function reset() {
    guessedLetters = []
}