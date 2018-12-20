// Audio control
// var aud = document.getElementById("volume");
    // aud.volume = 0.1;
// Game variables
var psyLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// var randLetter = Math.floor(Math.random()* psyLetters.length);

var wins = 0;
var losses = 0;
var lettersGuessed = [];
var guessesLeft = 7;
// var audiofx1 = Audio("assets/music/winfx.wav");
// var audiofx2 = Audio("assets/music/lossfx.wav");

/* Variables that hold references to the places in the html
where we want to display things.*/
var userWins = document.getElementById("wins-text");
var userLosses = document.getElementById("losses-text");
var userGuessesLeft = document.getElementById("guesses-left");
var userGuesses = document.getElementById("your-guesses");

// This function is run whenever the user presses a key.
document.onkeyup = function(event)  {

    // Determines which key was pressed.
    var userGuess = event.key;
    console.log("This is the user letter: " + userGuess);

    // Computer choice will be determined
    var computerLetter = psyLetters[Math.floor(Math.random()* psyLetters.length)];
    console.log("This is the computer letter: " + computerLetter);

    switch (userGuess) {
        case (computerLetter):
            wins++;
            guessesLeft = 7;
            lettersGuessed.length = 0;
            // var computerLetter = psyLetters[randLetter];
            break;
            
        default:
            guessesLeft--;
            lettersGuessed.push(userGuess);
            break;
    }

    if (guessesLeft === 0) {
        computerLetter;
        losses++;
        guessesLeft = 7;
        lettersGuessed.length = 0;
    }
    userWins.textContent =  wins;
    userLosses.textContent =  losses;
    userGuessesLeft.textContent =  guessesLeft;
    userGuesses.textContent =  lettersGuessed;

};


// Bug Council
// console.log(randLetter);