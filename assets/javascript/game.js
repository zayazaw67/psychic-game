var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]

    
var computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerSelection)


document.onkeyup = function(event) {
    var userGuess = event.key; 
    console.log (userGuess);
    if (userGuess === computerSelection)
    console.log("working")
}

// var winsText = document.getElementById (wins-text)
// var lossesText = document.getElementById (losses-text)
// var guessesLeft = document.getElementById (guessesLeft-text)
// var guessedLetters = document.getElementById (guessedLetters-text)