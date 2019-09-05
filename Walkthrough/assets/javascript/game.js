var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
var compIndex = 0;
var compChoice = alphabet[compIndex];
console.log("Comp choice is " + compChoice);

// var computerSelection = alphabet[Math.floor(Math.random() * alphabet.length)];
//     console.log(computerSelection)

document.onkeyup = function (event) {
    var letter = event.key.toLowerCase();
    console.log(letter);
    if (letter === compChoice)
    console.log("working")
    else {console.log("You lost")}
}

