document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  var out = document.getElementById('output');
var x = event.key;

if(keyName == "W" || keyName == "w"){
  console.log(p1.style.top);
  if (p1.style.top <= "178px") {
    return;
  } else {
    p1.style.top = parseInt(p1.style.top) - 15 + "px";
  }
  // console.log(p1.style.top);
}

if(keyName == "S" || keyName == "s"){
  if (p1.style.top >= "637") {
    return;
  } else {
    p1.style.top = parseInt(p1.style.top) + 15 + "px";
  }
  // console.log(p1.style.top);
}

if(keyName == "38" || keyName == "ArrowUp"){
  if (p2.style.top <= "178px") {
    return;
  } else {
    p2.style.top = parseInt(p2.style.top) - 15 + "px";
  }
  // console.log(p2.style.top);
}

if(keyName == "40" || keyName == "ArrowDown"){
  if (p2.style.top >= "637px") {
    return;
  } else{
  p2.style.top = parseInt(p2.style.top) + 15 + "px";
  }
  // console.log(p2.style.top);
}
});

const p2 = document.getElementById("p2");
const p1 = document.getElementById("p1");



const ball = document.getElementById("ball");

vx = Math.random() * 500 - 250;
if (vx < 25 && vx > -25) {
  if (vx < 25 && vx > 0) {
    vx = 25;
  } else {
    vx = -25;
  }
}
vy = Math.random() * 500 - 250;
// console.log(vx, vy);
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
ydegrees = vy/vx;

if (ydegrees < 1 && ydegrees > -1) {
  if (ydegrees < 0) {
    ydegrees = -1;
  } else {
    ydegrees = 1;
  }
}
console.log(parseInt(p2.style.left));
console.log(parseInt(ball.style.left), parseInt(p2.style.left)  - 25, parseInt(ball.style.left)  + 25);
function ballSpeed() {
  x = ball.x;
  y = ball.y;
// console.log(x, y);
if (x <= 100 || x >= 1770) {
    vx = vx * -1;
    // console.log(1);
  }
  if (parseInt(ball.style.left) >= parseInt(p2.style.left) - 50 && parseInt(ball.style.left) <= parseInt(p2.style.left) + 50) {
    if (parseInt(ball.style.top) <= parseInt(p2.style.top) + 50 && parseInt(ball.style.top) >= parseInt(p2.style.top) - 50) {
      console.log("true");
      vx = vx * -1;
    }
  }

  if (y <= 178 && ydegrees < 0 || y >= 637 && ydegrees > 0) {
    ydegrees = ydegrees * -1;
    // console.log("less");
  }
  // console.log(ydegrees);
  if (vx > 0) {
    ball.style.left = parseInt(ball.style.left) + 1 + "px";
    // "go right"
  } else {
    ball.style.left = parseInt(ball.style.left) - 1 + "px";
    // "go left"
  }
    ball.style.top = parseInt(ball.style.top) + 0 + "px";
    // "go up"
}


setInterval(()=> {
  // console.log("interval start");
  ballSpeed();
}, 1);

// console.dir(Array.from(document.getElementsByClassName('game'))[0]);
