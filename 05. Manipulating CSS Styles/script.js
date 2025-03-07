'use strict';
const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔No Number 😟';
  }

  // Correct guess
  else if (guess === number) {
    document.querySelector('.message').textContent = '🎉Correct Number 🥳';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }

  // Guess is too high
  else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🙉Too high 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💔 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  // Guess is too low
  else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🙈Too low 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💔 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
