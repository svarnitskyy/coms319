// Your solution goes here 
function playGuessingGame(numToGuess, totalGuesses) {


    let guess;

    for (let numGuess = 0; numGuess < totalGuesses; numGuess++) {
        if (numGuess == 0) {
            guess = prompt("Enter a number between 1 and 100.");
        }
        else if (guess == numToGuess) {
            return numGuess;
        }
        else if (isNaN(guess)) {
            guess = prompt("Please enter a number.");
            numGuess--;
        }
        else {
            if (guess > numToGuess) {
                guess = prompt(guess + " is too large. Guess a smaller number.");
            }
            else if (guess < numToGuess) {
                guess = prompt(guess + " is too small. Guess a larger number.");
            }
        }

        if(guess == null){
            return 0;
        }

    }

    return 0;


}


function playGuessingGame(numToGuess) {


    let totalGuesses = 10;



    let guess;

    for (let numGuess = 0; numGuess < totalGuesses; numGuess++) {
        if (numGuess == 0) {
            guess = prompt("Enter a number between 1 and 100.");
        }
        else if (guess == numToGuess) {
            return numGuess;
        }
        else if (isNaN(guess)) {
            guess = prompt("Please enter a number.");
            numGuess--;
        }
        else {
            if (guess > numToGuess) {
                guess = prompt(guess + " is too large. Guess a smaller number.");
            }
            else if (guess < numToGuess) {
                guess = prompt(guess + " is too small. Guess a larger number.");
            }
        }

        if(guess == null){
            return 0;
        }

    }

    return 0;


}