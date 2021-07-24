'use strict';

/*

document.querySelector('.message').textContent = 'Correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  }

  // When player win
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number!';

    // When player guesses the number, the number is displayed

    document.querySelector('.number').textContent = secretNumber;

    // Background manipulation

    document.querySelector('body').style.backgroundColor = '#60b347';

    // Number box manipulation

    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    // When guess is to high

    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    }

    // When score reaches 0
    else {
      document.querySelector('.message').textContent = 'You lost your game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  // When guess is to low
  else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

// Again button

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing again...!';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#000000';
  document.querySelector('.number').style.width = '15rem';
});