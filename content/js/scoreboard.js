
function score() {
  x = ball.x;
  y = ball.y;
if (x <= 100 || x >= 1770) {
  if (x < 0) {
    console.log("player 1 point")
  } else {
    console.log("player 2 point")
  }
}
}
