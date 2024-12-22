import prompt from "picoprompt";
//This program will only generate the number one time, and will close when guessed correctly.


// create a function to generate the random number. Number parameter should range lowest to highest.
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// create a random number on the cpu side
const secretNumber = getRandomNumber(1, 10);

// set a boolean value for the initial guess.
let guessedCorrectly = true;


while (!guessedCorrectly) {
  // Ask the user to guess a number
  const userInput = prompt("Guess a number between 1 and 10:");
  const guess = parseInt(userInput);

  // Check if the input is a valid number between 1 and 10
  if (isNaN(guess) || guess < 1 || guess > 10) {
    console.log("Please guess a number between 1 and 10.");
    continue;
  }

  // Check if the guess is correct
  if (guess === secretNumber) {
    console.log("Congratulations! You've guessed the correct number.");
    guessedCorrectly = true;
  } else if (guess < secretNumber) {
    console.log("Your guess is too low. Try again!");
  } else if (guess > secretNumber) {
    console.log("Your guess is too high. Try again!");
  }
}
