'use strict';

// Game initial state
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// document.querySelector('.number').textContent = secretNumber;

// DRY Example
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Game function
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No input
  if (!guess) {
    displayMessage('⛔ No Number 😟');
  }

  // Correct guess
  else if (guess === secretNumber) {
    displayMessage('🎉Correct Number 🥳');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // Guess is wrong (!==)
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🙉Too high 📈' : '🙈Too low 📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💔 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Reset the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.number').textContent = secretNumber;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
