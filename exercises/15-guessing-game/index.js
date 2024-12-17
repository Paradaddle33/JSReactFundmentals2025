import prompt from "picoprompt";

// create a function to generate a random number. Number parameter should range lowest to highest.
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// create a random number between 1 and 10 using the function getRandomNumber
const secretNumber = getRandomNumber(1, 10);

// create a boolean for the initial guess.
let guessedCorrectly = false;


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
