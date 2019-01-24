// alot of variables to make the script work \/
const p2 = document.getElementById("p2");
const p1 = document.getElementById("p1");
const ball = document.getElementById("ball");
var audio = document.getElementById("audiopoint");
var bat = document.getElementById("audiobat");
const clothesline = document.getElementById('clothesline');
// make the background music more quiet
document.getElementById('b_music').volume = 0.5;
// get height of window
windowHeight = window.innerHeight;
windowWidth = window.innerWidth;
percentageHeight = windowHeight / 100;
percentageWidth = windowWidth / 100;
// get the scoreboard height and margins
pointtavle = document.getElementsByClassName("pointtavle")[0];
ptMarginTop = parseFloat(getComputedStyle(pointtavle).getPropertyValue("margin-top"));
ptMarginBottom = parseFloat(getComputedStyle(pointtavle).getPropertyValue("margin-bottom"));
ptHeight = parseFloat(getComputedStyle(pointtavle).height);
// calculate the total height of the scoreboard with margins
ptTotalHeight = ptMarginTop + ptMarginBottom + ptHeight;
// get the reset button height and margins
resetButton = document.getElementsByClassName("reset")[0];
rbMarginTop = parseFloat(getComputedStyle(resetButton).getPropertyValue("margin-top"));
rbMarginBottom = parseFloat(getComputedStyle(resetButton).getPropertyValue("margin-bottom"));
rbHeight = parseFloat(getComputedStyle(resetButton).height);
// calculate the reset button height with margins
rbTotalHeight = rbMarginTop + rbMarginBottom + rbHeight;
// get the game widht and height with margin and paddings
gameTotalWidth = parseFloat(getComputedStyle(document.getElementsByClassName('game')[0]).width);
gamePaddingLeft = parseFloat(getComputedStyle(document.getElementsByClassName('game')[0]).getPropertyValue("padding-left"));
gamePaddingRight = parseFloat(getComputedStyle(document.getElementsByClassName('game')[0]).getPropertyValue("padding-right"));
gamemarginHeight = parseFloat(getComputedStyle(document.getElementsByClassName('game')[0]).getPropertyValue("margin-top"));
gameHeight = parseFloat(getComputedStyle(document.getElementsByClassName('game')[0]).height) + gamemarginHeight;
// calculate the gamewidth
gameWidth = (gameTotalWidth-gamePaddingLeft-gamePaddingRight)
// calculate the ball height
ballHeight = parseFloat(getComputedStyle(ball).height)/percentageHeight;
// get the width of the bats
var p1width = p1.width/percentageWidth;
var p2width = p2.width/percentageWidth;
// set the bats position on the x axis so they're the same distance from the sides
p1.style.left = (gamePaddingLeft/percentageWidth)+p1width + "vw";
p2.style.left = (gameWidth/percentageWidth)-(gamePaddingLeft*2/percentageWidth)-p2width + "vw";
// get the height of the bats
p2BatHeight = parseInt(p2.style.height);
p1BatHeight = parseInt(p1.style.height);
// variables for score and a counter used for the ball movement
num1=0
num2=0
startcount=0
// calculating the balls start positino and where the games top and bottom lines are
startLeftBall=(gameWidth/percentageWidth)/2
gameTop=(ptTotalHeight + rbTotalHeight + gamemarginHeight) / percentageHeight
gameBottom = gameHeight / percentageHeight
startTopBall= gameTop + (gameBottom / 2) - ballHeight/2
// style where the ball and bats need to start
clothesline.style.top= gameTop - 2 + "vh";
ball.style.top = startTopBall+"vh"
ball.style.left = startLeftBall+"vw"
p2.style.top = startTopBall + "vh"
p1.style.top = startTopBall + "vh"
// You could also use an array
var map = [];
// making event listener so you can press multiple keys at once
document.addEventListener('keyup', (event) => {
  const keyName = event.key;
  map[keyName] = event.type == "keydown";
});
// making an add event listener so we can use the keyboard for movement
document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  map[keyName] = event.type == "keydown";
  if(map.W || map.w){
    if (parseFloat(p1.style.top) <= gameTop) {
      return;
    } else {
      p1.style.top = parseFloat(p1.style.top) - (percentageHeight / gameHeight * 150) + "vh";
    }
  }

  if(map.S || map.s){
    if (parseFloat(p1.style.top) >= gameBottom +2) {
      return;
    } else {
      p1.style.top = parseFloat(p1.style.top) + (percentageHeight / gameHeight * 150) + "vh";
    }
  }

  if(map.ArrowUp){
    if (parseFloat(p2.style.top) <= gameTop) {
      return;
    } else {
      p2.style.top = parseFloat(p2.style.top) - (percentageHeight / gameHeight * 150) + "vh";
    }
  }

  if(map.ArrowDown){
    if (parseFloat(p2.style.top) >= gameBottom +2) {
      return;
    } else{
    p2.style.top = parseFloat(p2.style.top) + (percentageHeight / gameHeight * 150) + "vh";
    }
  }
});
// function to start the balls movement
function ballstart() {
  // play background music when game starts
  document.getElementById('b_music').play();
  // running function ydeg which makes the ball randomize speed and degrees of movement at start of game
  ydeg()
  // setting an interval which moves the ball continuously
  setInterval(()=> {
      ballSpeed();
  }, 40);
};
// function ydeg which makes the ball randomize speed and degrees of movement at start of game
function ydeg() {
  // some math to calculate the ball movement along the x axis
vx = Math.random() * 500 - 250;
if (vx < 25 && vx > -25) {
  if (vx < 25 && vx > 0) {
    vx = 25;
  } else {
    vx = -25;
  }
}
// some math used later to calculate the balls movement along the y axis
vy = Math.random() * 500 - 250;
// some math used to calculate the speed of the ball
if (vx<0) {
  vx=vx*-1;
  speed = 30/vx*100;
  vx=vx*-1;
  if (speed>50) {
    speed = 50;
  }
}else {
  speed = 30/vx*100;
  if (speed>50) {
    speed = 50;
  }
}
// math used to calculate the balls movement along the y axis
  ydegrees = vy/vx;
}
// function for the ball movement in the game
function ballSpeed() {
// making sure the ball doesn't get stuck between the ydegrees values of 1 and -1, will make the ball "shake" but it will still move
if (ydegrees < 1 && ydegrees > -1) {
  if (ydegrees > 0) {
    // if the variable ydegrees is between 1 and 0.75 move the ball up 1 every time it moves along the x axis by 1
  if (ydegrees < 1 && ydegrees > 0.75) {
      ball.style.top = parseInt(ball.style.top) + 1 + "vh";
      // if the variable ydegrees is between 0.75 and 0.5 move the ball up 1 every second time it moves along the x axis by 1
  } if (ydegrees < 0.75 && ydegrees > 0.50) {
      startcount++
      if (startcount % 2 === 0) {
        ball.style.top = parseInt(ball.style.top) + 1 + "vh";
      }
      // if the variable ydegrees is between 0.5 and 0 move the ball up 1 every third time it moves along the x axis by 1
  } if (ydegrees < 0.50 && ydegrees > 0.0) {
      startcount++
      if (startcount % 3 === 0) {
        ball.style.top = parseInt(ball.style.top) + 1 + "vh";
      }
    }
  } else {
    // if the variable ydegrees is between 1 and 0.75 move the ball down 1 every time it moves along the x axis by 1
    if (ydegrees > -1 && ydegrees < -0.75) {
        ball.style.top = parseInt(ball.style.top) - 1 + "vh";
        // if the variable ydegrees is between 0.75 and 0.5 move the ball down 1 every second time it moves along the x axis by 1
    } if (ydegrees > -0.75 && ydegrees < -0.50) {
        startcount++
        if (startcount % 2 === 0) {
          ball.style.top = parseInt(ball.style.top) - 1 + "vh";
        }
        // if the variable ydegrees is between 0.5 and 0 move the ball down 1 every third time it moves along the x axis by 1
    } if (ydegrees > -0.50 && ydegrees < -0.0) {
        startcount++
        if (startcount % 3 === 0) {
          ball.style.top = parseInt(ball.style.top) - 1 + "vh";
        }
      }
    }
}
// making sure the balls moves as it should when it hits the p2 controller on different positions
  if (parseInt(ball.style.left) >= parseInt(p2.style.left) && parseInt(ball.style.left) <= parseInt(p2.style.left)) {
    if (parseInt(ball.style.top) - ballHeight/2 <= parseInt(p2.style.top) + p2BatHeight && parseInt(ball.style.top) + ballHeight/2 >= parseInt(p2.style.top)) {
      // makes sure the ball changes directions along the x axis when it "hits" the controller
      vx = vx * -1;
      // play sound when it hit the bat
      bat.play();
      // making the ball go in different angles when hitting different parts of the controller
      if (parseInt(ball.style.top) + ballHeight/2 >= parseInt(p2.style.top) + p2BatHeight/2) {
        if (parseInt(ball.style.top) + ballHeight/2 >= parseInt(p2.style.top) + (p2BatHeight/8)*7) {
          // making the ball move less straight when hitting the bottom part of the controller
             if (ydegrees > 0) {
               ydegrees = ydegrees * 1.5;
             } else {
               ydegrees = ydegrees * -1.5;
             }
        }
        else if (parseInt(ball.style.top) + ballHeight/2 >= parseInt(p2.style.top) + (p2BatHeight/8)*5) {
          // making sure the ball does nothing when hitting a certain part of the bat
        } else{
          // making the ball move more straight when hitting the middle of the controller
          if (ydegrees > 0) {
            ydegrees = ydegrees / 1.5;
          } else {
            ydegrees = ydegrees / -1.5;
          }
        }
      } else {
        if (parseInt(ball.style.top) - ballHeight/2 <= parseInt(p2.style.top) + p2BatHeight/2){
          if (parseInt(ball.style.top) + ballHeight/2 > parseInt(p2.style.top) + (p2BatHeight/8)) {
            // making the ball move less straight when hitting the top part of the controller
            if (ydegrees > 0) {
              ydegrees = ydegrees * -1.5;
            } else {
              ydegrees = ydegrees * 1.5;
            }
          }
          else if (parseInt(ball.style.top) <= parseInt(p2.style.top) +(p2BatHeight/8)*3) {
            // making sure the ball does nothing when hitting a certain part of the bat
          } else{
            // making the ball move more straight when hitting the middle of the controller
            if (ydegrees > 0) {
              ydegrees = ydegrees / -1.5;
            } else {
              ydegrees = ydegrees / 1.5;
            }
          }
        }
      }
    }
  }
  // making sure the balls moves as it should when it hits the p1 controller on different positions
  if (parseInt(ball.style.left) >= parseInt(p1.style.left) && parseInt(ball.style.left) <= parseInt(p1.style.left)) {
    if (parseInt(ball.style.top) - ballHeight/2 <= parseInt(p1.style.top) + p1BatHeight && parseInt(ball.style.top) + ballHeight/2 >= parseInt(p1.style.top)) {
      // makes sure the ball changes directions along the x axis when it "hits" the controller
      vx = vx * -1;
      // play sound when it hit the bat
      bat.play();
      // making the ball go in different angles when hitting different parts of the controller
      if (parseInt(ball.style.top) + ballHeight/2 >= parseInt(p1.style.top) + p1BatHeight/2) {
        if (parseInt(ball.style.top) + ballHeight/2 >= parseInt(p1.style.top) + (p1BatHeight/8)*7) {
          // making the ball move less straight when hitting the bottom part of the controller
    if (ydegrees > 0) {
      ydegrees = ydegrees * 1.5;
    } else {
      ydegrees = ydegrees * -1.5;
             }
        }
        else if (parseInt(ball.style.top) + ballHeight/2 >= parseInt(p1.style.top) + (p1BatHeight/8)*5) {
          // making sure the ball does nothing when hitting a certain part of the bat
        } else{
          // making the ball move more straight when hitting the middle of the controller
          if (ydegrees > 0) {
            ydegrees = ydegrees / 1.5;
          } else {
            ydegrees = ydegrees / -1.5;
          }
        }
      } else {
        if (parseInt(ball.style.top) - ballHeight/2 <= parseInt(p1.style.top) + p1BatHeight/2){
          if (parseInt(ball.style.top) + ballHeight/2 > parseInt(p1.style.top) + p1BatHeight/8) {
            // making the ball move less straight when hitting the bottom part of the controller
            if (ydegrees > 0) {
              ydegrees = ydegrees * -1.5;
            } else {
              ydegrees = ydegrees * 1.5;
            }
          }
          else if (parseInt(ball.style.top) - ballHeight/2 <= parseInt(p1.style.top) + (p1BatHeight/8)*3) {
            // making sure the ball does nothing when hitting a certain part of the bat
          } else{
            // making the ball move more straight when hitting the middle of the controller
            if (ydegrees > 0) {
              ydegrees = ydegrees / -1.5;
            } else {
              ydegrees = ydegrees / 1.5;
            }
          }
        }
      }
    }
  }
// makes the ball confined to the game, so it can't go over or under the sides
  if (parseInt(ball.style.top) <= gameTop - ballHeight/percentageHeight && ydegrees < 0 || parseInt(ball.style.top) >= gameBottom + gameTop - (gamemarginHeight/percentageHeight) - (ballHeight/percentageHeight) && ydegrees > 0) {
    // when the ball hits the side makes it go either up or down so it stays confined in the game
    ydegrees = ydegrees * -1;
  }
// makes the ball move continuously in the given direction
// this if/else makes it move along the x axis in either direction
  if (vx > 0) {
    ball.style.left = parseInt(ball.style.left) + 1 + "vw";
  } else {
    ball.style.left = parseInt(ball.style.left) - 1 + "vw";
  }
  // makes the ball move along the y axis
    ball.style.top = parseInt(ball.style.top) + ydegrees + "vh";
// scoreboard code, makes the ball reset after it hits either end of the game behind the players and gives the opponent player a point
    if (parseInt(ball.style.left) < 0) {
      // play audio on score
      audio.play();
      // displays point
      document.getElementById("scoreboard2").innerHTML = ++num1;
      // resets ball position
      ball.style.top = startTopBall+"vh"
      ball.style.left = startLeftBall+"vw"
      // resets ball direction and speed
      ydeg();
      // if there's more than 10 points end the game
      if (num1 == 10) {
        // reload site
        reset();
        // get player name if any is given
        var pl2=document.getElementById("pl2").value;
        // show alert with winner
        if (pl2) {
          alert('A winner is you!\n'+pl2)
        }else {
          alert('A winner is you!\nPlayer 2')
        }
      }
    } else if (parseInt(ball.style.left) > 95) {
      // play audio on score
      audio.play();
      // displays point
      document.getElementById("scoreboard1").innerHTML = ++num2;
      // resets ball position
      ball.style.top = startTopBall+"vh"
      ball.style.left = startLeftBall+"vw"
      // resets ball direction and speed
      ydeg();
      // if there's more than 10 points end the game
      if (num2 == 10) {
        // reload site
        reset();
        // get player name if any is given
        var pl1=document.getElementById("pl1").value;
        // show alert with winner
        if (pl1) {
          alert('A winner is you!\n'+pl1)
        }else {
          alert('A winner is you!\nPlayer 1')
        }
      }
    }
}
