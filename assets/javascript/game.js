var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var guessedLetters = [];
var regex = /[a-z]/;

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
    var userChoice = event.key;
    // make sure the user selects a value a-z
      if (!regex.test(userChoice)) {
        alert("please enter a letter");}
      

    else if (userGuess === computerSelection) {
        alert("You won, guess another letter to play again!");
        wins++;
        guessesLeft = 5;
        winsText.textContent = "Wins: " + wins;
        computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        compChoice = computerChoices[computerSelection];
        reset()
        console.log(computerSelection)
    }
    else {
        // console.log(guessesLeft);
        guessesLeft --;
        guessesLeftText.textContent = ("Guesses Left: " + guessesLeft);
        guessedLetters.push(userGuess);
        display();
        
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
    else {
        console.log(userChoice);
      } 
}
  
function display() {
    // display.push (guessedLettersText)
    console.log(guessedLetters);
    guessedLettersText.innerHTML = "Letters Guessed: "  + guessedLetters;
}

function reset() {
    guessedLetters = []
}