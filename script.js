"use strict";

let answer = Math.trunc(Math.random() * 20) + 1;

console.log(answer);

let score = 20;
let highscore = 0;

const changeMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const changeScore = function (score) {
  document.querySelector(".score").textContent = score;
};

const setHighscore = function (score) {
  if (score > highscore) {
    highscore = score;
  }
  document.querySelector(".highscore").textContent = highscore;
};

const gameOver = function () {
  changeMessage("GAME OVER!");
  document.querySelector("body").style.backgroundColor = "#ff5050";
  document.querySelector(".number").style.width = "30rem";
  document.querySelector(".number").textContent = answer;
  changeScore(0);
};

const checker = function () {
  const userGuess = Number(document.querySelector(".guess").value);
  console.log(userGuess);

  // if player hasn't put an input
  if (!userGuess) {
    changeMessage("Please input a number.");

    // if player wins
  } else if (userGuess === answer) {
    changeMessage("Correct!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = answer;
    setHighscore(score);
    // when guess is wrong
  } else if (userGuess !== answer) {
    if (score > 1) {
      changeMessage(userGuess > answer ? "Too High!" : "Too Low!");
      score -= 1;
      changeScore(score);
    } else {
      gameOver();
    }
  }
};

const restartGame = function () {
  score = 20;
  answer = Math.trunc(Math.random() * 20) + 1;
  console.log("new answer: ", answer);
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  changeScore(score);
  changeMessage("Start guessing...");
};

document.querySelector(".check").addEventListener("click", checker);

document.querySelector(".again").addEventListener("click", restartGame);
