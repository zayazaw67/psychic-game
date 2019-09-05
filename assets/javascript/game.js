var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var guessedLetters = [];

var winsText = document.getElementById("wins-text")
var lossesText = document.getElementById("losses-text")
var guessesLeftText = document.getElementById("guessesLeft-text")
var guessedLettersText = document.getElementById("guessedLetters-text")

var computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerSelection)


document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    if (userGuess === computerSelection) {
        console.log("you win")
        wins++
    winsText.textContent = "Wins: " + wins;}
    else {
        guessesLeft--
    console.log(guessesLeft);
    //if statement when guesses =0 
    // losses ++
    // lossesText.textContent = "Losses: " + losses
}
}


    // wins++
    // winsText.textContent = "Wins: " + wins;