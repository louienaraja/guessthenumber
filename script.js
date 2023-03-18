'use strict';

let answer = Math.trunc(Math.random() * 20) + 1;

console.log(answer);
let score = 20;
let highscore = 0;

const setHighscore = function (score) {
  if (score > highscore) {
    highscore = score;
  }
  document.querySelector('.highscore').textContent = highscore;
};

const gameOver = function () {
  document.querySelector('.message').textContent = 'GAME OVER!';
  document.querySelector('body').style.backgroundColor = '#ff5050';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.number').textContent = answer;
  document.querySelector('.score').textContent = 0;
};

const checker = function () {
  const userGuess = Number(document.querySelector('.guess').value);
  console.log(userGuess);

  // if player hasn't put an input
  if (!userGuess) {
    document.querySelector('.message').textContent = 'Please input a number.';
    // if player wins
  } else if (userGuess === answer) {
    document.querySelector('.message').textContent = 'Correct!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = answer;
    console.log('success score: ', score);
    setHighscore(score);
    // guess is too high
  } else if (userGuess > answer) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      gameOver();
    }
    // guess is too low
  } else if (userGuess < answer) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      gameOver();
    }
  }
};

const restartGame = function () {
  score = 20;
  answer = Math.trunc(Math.random() * 20) + 1;
  console.log('new answer: ', answer);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
};

document.querySelector('.check').addEventListener('click', checker);

document.querySelector('.again').addEventListener('click', restartGame);
