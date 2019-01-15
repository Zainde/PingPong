// reset function, resets the game after being activated
function reset() {
  document.getElementById("scoreboard1").innerHTML = "0";
  document.getElementById("scoreboard2").innerHTML = "0";
  num1 = 0;
  num2 = 0;
  ball.style.top = startTopBall+"vh"
  ball.style.left = startLeftBall+"vw"
countTime = -1;
};
