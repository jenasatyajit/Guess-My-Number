"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number !";
  } else if (guess === number) {
    document.querySelector(".number").textContent = number;
    document.querySelector(".message").textContent = "🎊 Correct Number";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess != number) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > number ? "📈 Too High !" : "📉 Too low !";
      document.querySelector(".score").textContent = --score;
    } else {
      document.querySelector(".message").textContent = "💥 You Loose !";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start guessing..."; //3
  document.querySelector("body").style.backgroundColor = "#222"; //7
  document.querySelector(".number").style.width = "15rem"; //8
  score = 20; //1
  document.querySelector(".score").textContent = score; //4
  number = Math.trunc(Math.random() * 20) + 1; //2
  document.querySelector(".number").textContent = number;
  document.querySelector(".number").textContent = "?"; //5
  document.querySelector(".guess").value = ""; //6
});
