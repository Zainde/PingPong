// making variables for the scoreboard numbers, a counter and constants for player 1, 2 and the ball
const p2 = document.getElementById("p2");
const p1 = document.getElementById("p1");
const ball = document.getElementById("ball");
var audio = document.getElementById("audiopoint");
var bat1 = document.getElementById("audiobat1");
var bat2 = document.getElementById("audiobat2");
document.getElementById("audiopoint").volume = 0.1;

windowHeight = window.innerHeight;
windowWidth = window.innerWidth;
percentageHeight = windowHeight / 100;
percentageWidth = windowWidth / 100;

pointtavle = document.getElementsByClassName("pointtavle")[0];
ptMarginTop = parseInt(getComputedStyle(pointtavle).getPropertyValue("margin-top"));
ptMarginBottom = parseInt(getComputedStyle(pointtavle).getPropertyValue("margin-bottom"));
ptHeight = parseInt(getComputedStyle(pointtavle).height);

ptTotalHeight = ptMarginTop + ptMarginBottom + ptHeight;

resetButton = document.getElementsByClassName("reset")[0];
rbMarginTop = parseInt(getComputedStyle(resetButton).getPropertyValue("margin-top"));
rbMarginBottom = parseInt(getComputedStyle(resetButton).getPropertyValue("margin-bottom"));
rbHeight = parseInt(getComputedStyle(resetButton).height);

rbTotalHeight = rbMarginTop + rbMarginBottom + rbHeight;

gameTotalWidth = parseInt(getComputedStyle(document.getElementsByClassName('col')[0]).width);
gamePaddingLeft = parseInt(getComputedStyle(document.getElementsByClassName('col')[0]).getPropertyValue("padding-left"));
gamePaddingRight = parseInt(getComputedStyle(document.getElementsByClassName('col')[0]).getPropertyValue("padding-right"));

gameHeight = parseInt(getComputedStyle(document.getElementsByClassName('col')[0]).height);
gameWidth = (gameTotalWidth-gamePaddingLeft-gamePaddingRight)/2

ballHeight = parseInt(getComputedStyle(ball).height)/percentageHeight;

num1=0
num2=0
startcount=0

startLeftBall=gameWidth/percentageWidth
gameTop=(ptTotalHeight + rbTotalHeight) / percentageHeight
gameBottom = gameHeight / percentageHeight
startTopBall=gameTop + gameBottom / 2.15
batCornerTop=12
batCornerBottom=5
batMiddleTop=5
batMiddleBottom=0

ball.style.top = startTopBall+"vh"
ball.style.left = startLeftBall+"vw"
p2.style.top = startTopBall + "vh"
p1.style.top = startTopBall + "vh"
var map = []; // You could also use an array

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
countTime=0
  setInterval(()=> {
    if (countTime === 0) {
      ballSpeed();
    }
  }, 40);
};
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

// old code, should work fine without it, test and delete afterwards!!!
// if (ydegrees < 1 && ydegrees > -1) {
//   if (ydegrees < 0) {
//     ydegrees = -1;
//   } else {
//     ydegrees = 1;
//   }
// }

// function for the ball movement in the game
function ballSpeed() {
  // 2 variables to get the balls x and y values
  x = ball.x;
  y = ball.y;
// making sure the ball doesn't get stuck between the ydegrees values of 1 and -1, will make the ball "shake" but it will still move
if (ydegrees < 1 && ydegrees > -1) {
  if (ydegrees > 0) {
  if (ydegrees < 1 && ydegrees > 0.75) {
      ball.style.top = parseInt(ball.style.top) + 1 + "vh";
  } if (ydegrees < 0.75 && ydegrees > 0.50) {
      startcount++
      if (startcount % 2 === 0) {
        ball.style.top = parseInt(ball.style.top) + 1 + "vh";
      }
  } if (ydegrees < 0.50 && ydegrees > 0.0) {
      startcount++
      if (startcount % 3 === 0) {
        ball.style.top = parseInt(ball.style.top) + 1 + "vh";
      }
    }

     // if (ydegrees < 0.25 && ydegrees > -0.25) {
    //   ball.style.top = parseInt(ball.style.top) + 0 + "vh";
    // }
  } else {
    if (ydegrees > -1 && ydegrees < -0.75) {
        ball.style.top = parseInt(ball.style.top) - 1 + "vh";
    } if (ydegrees > -0.75 && ydegrees < -0.50) {
        startcount++
        if (startcount % 2 === 0) {
          ball.style.top = parseInt(ball.style.top) - 1 + "vh";
        }
    } if (ydegrees > -0.50 && ydegrees < -0.0) {
        startcount++
        if (startcount % 3 === 0) {
          ball.style.top = parseInt(ball.style.top) - 1 + "vh";
        }
      }
       // if (ydegrees < 0.25 && ydegrees > -0.25) {
      //   ball.style.top = parseInt(ball.style.top) - 0 + "vh";
      // }
  }
}
// making sure the balls moves as it should when it hits the p2 controller on different positions
  if (parseInt(ball.style.left) >= parseInt(p2.style.left) && parseInt(ball.style.left) <= parseInt(p2.style.left)) {
    if (parseInt(ball.style.top) <= parseInt(p2.style.top) + 12 && parseInt(ball.style.top) >= parseInt(p2.style.top) - 2) {
      // makes sure the ball changes directions along the x axis when it "hits" the controller
      vx = vx * -1;
      bat1.play();

      // making the ball go in different angles when hitting different parts of the controller
      if (parseInt(ball.style.top) >= parseInt(p2.style.top) + 6) {
        if (parseInt(ball.style.top) >= parseInt(p2.style.top) + 10) {
// making the ball move more straight when hitting the middle of the controller
// top of controller
             if (ydegrees > 0) {
               ydegrees = ydegrees * 1.5;
             } else {
               ydegrees = ydegrees * -1.5;
             }

        }
        else if (parseInt(ball.style.top) >= parseInt(p2.style.top) + 7) {
        } else{
// making the ball move less straight when hitting the top part of the controller
// just under top
          if (ydegrees > 0) {
            ydegrees = ydegrees / 1.5;
          } else {
            ydegrees = ydegrees / -1.5;
          }
        }
      } else {
        if (parseInt(ball.style.top) <= parseInt(p2.style.top) + 5){
          if (parseInt(ball.style.top) < parseInt(p2.style.top)) {
            // making the ball move more straight when hitting the middle of the controller

            if (ydegrees > 0) {
              ydegrees = ydegrees * -1.5;
            } else {
              ydegrees = ydegrees * 1.5;
            }
          }
          else if (parseInt(ball.style.top) == parseInt(p2.style.top)) {
          } else{
            // making the ball move less straight when hitting the bottom part of the controller
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
    if (parseInt(ball.style.top) <= parseInt(p1.style.top) + 12 && parseInt(ball.style.top) >= parseInt(p1.style.top) - 2) {
      bat2.play();

      // makes sure the ball changes directions along the x axis when it "hits" the controller
      vx = vx * -1;
      // making the ball go in different angles when hitting different parts of the controller
      if (parseInt(ball.style.top) >= parseInt(p1.style.top) + 6) {
        if (parseInt(ball.style.top) >= parseInt(p1.style.top) + 10) {
    // making the ball move more straight when hitting the middle of the controller
    if (ydegrees > 0) {
      ydegrees = ydegrees * 1.5;
    } else {
      ydegrees = ydegrees * -1.5;
             }


        }
        else if (parseInt(ball.style.top) >= parseInt(p1.style.top) + 7) {

        } else{
      // making the ball move less straight when hitting the top part of the controller
      // just under top
          if (ydegrees > 0) {
            ydegrees = ydegrees / 1.5;
          } else {
            ydegrees = ydegrees / -1.5;
          }
        }
      } else {
        if (parseInt(ball.style.top) <= parseInt(p1.style.top) + 5){
          if (parseInt(ball.style.top) < parseInt(p1.style.top)) {
            // making the ball move more straight when hitting the middle of the controller

            if (ydegrees > 0) {
              ydegrees = ydegrees * -1.5;
            } else {
              ydegrees = ydegrees * 1.5;
            }
          }
          else if (parseInt(ball.style.top) == parseInt(p1.style.top)) {
          } else{
            // making the ball move less straight when hitting the bottom part of the controller
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
  if (parseInt(ball.style.top) <= gameTop && ydegrees < 0 || parseInt(ball.style.top) >= gameBottom + gameTop - ballHeight && ydegrees > 0) {
    ydegrees = ydegrees * -1;
  }
// makes the ball move continuously in the given direction
// this if/else makes it move along the x axis
  if (vx > 0) {
    ball.style.left = parseInt(ball.style.left) + 1 + "vw";
  } else {
    ball.style.left = parseInt(ball.style.left) - 1 + "vw";
  }
// this if/else makes it move along the y axis, first is a fix for it to not bug out between the ydegrees numbers of 0.25 and -0.25
  // if (ydegrees < 0.25 && ydegrees > -0.25) {
  //   ball.style.top = parseInt(ball.style.top) + 0 + "vh";
  // } else {
    ball.style.top = parseInt(ball.style.top) + ydegrees + "vh";
  // }
// scoreboard code, makes the ball reset after it hits either end of the game behind the players and gives the opponent player a point
    if (parseInt(ball.style.left) < 0) {
      audio.play();

      document.getElementById("scoreboard2").innerHTML = ++num1;
      ball.style.top = startTopBall+"vh"
      ball.style.left = startLeftBall+"vw"
      // if there's more than 10 points end the game
      if (num1 == 10) {
        reset();
        var pl2=document.getElementById("pl2").value;
        if (pl2) {
          alert('A winner is you!\n'+pl2)
        }else {
          alert('A winner is you!\nPlayer 2')

        }
      }

    } else if (parseInt(ball.style.left) > 98) {
      audio.play();

      document.getElementById("scoreboard1").innerHTML = ++num2;
      ball.style.top = startTopBall+"vh"
      ball.style.left = startLeftBall+"vw"
      // if there's more than 10 points end the game
      if (num2 == 10) {
        reset();
        var pl1=document.getElementById("pl1").value;
        if (pl1) {
          alert('A winner is you!\n'+pl1)
        }else {
          alert('A winner is you!\nPlayer 1')

        }
        }

    }
}
