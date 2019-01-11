let score1 = document.getElementById("scoreboard1");
let score2 = document.getElementById("scoreboard2");

//if wall hit, run this.
function increaseB(point) {
    // Or in one line, return b + 1;
    var c = point + 1;
    return c;
}
var point = 0;

//this needs to calculate the current number + 1
//need ball and wall ids for this.
function increaseScore1(){
    return Math.ceil(increaseB(point));
}
function increaseScore2(){
    return Math.ceil(increaseB(point));
  }

//this needs to automatically update when the ball touches left or right.
//belongs under score
function rollTheDice(){
  scoreboard1.innerText = increaseScore1();
  scoreboard2.innerText = increaseScore2();
  getResult();
}

//scoreboard updates in html
function getResult(){
let num1 =  parseInt(scoreboard1.innerText);
let num2 =  parseInt(scoreboard2.innerText);

}


/*
// define initial player score
var playerLeft = playerRight = 0

// create text for the score, set font properties
var scoreLeft = draw.text(playerLeft+'').font({
  size: 32,
  family: 'Menlo, sans-serif',
  anchor: 'end',
  fill: '#fff'
}).move(width/2-10, 10)

// cloning rocks!
var scoreRight = scoreLeft.clone()
  .text(playerRight+'')
  .font('anchor', 'start')
  .x(width/2+10)
  */