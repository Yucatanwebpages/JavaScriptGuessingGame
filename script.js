"use strict";

// GUESSING GAME

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input

  if (!guess) {
    // document.querySelector(".message").textContent = "No number!";
    displayMessage("No number!");
  }

  // When player win
  else if (guess === secretNumber) {
    //  document.querySelector(".message").textContent = "Correct number!";
    displayMessage("Correct number!");
    // When player guesses the number, the number is displayed

    document.querySelector(".number").textContent = secretNumber;

    // Background manipulation

    document.querySelector("body").style.backgroundColor = "#60b347";

    // Number box manipulation

    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "Too high!" : "Too low!";
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    }

    // When score reaches 0
    else {
      // document.querySelector(".message").textContent = "You lost your game!";
      displayMessage("You lost your game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Again button

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector(".message").textContent = "Start guessing again...!";
  displayMessage("Start guessing again...!");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#000000";
  document.querySelector(".number").style.width = "15rem";
});
