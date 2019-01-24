// making the cpu opponent
function cpu(id, degree){
  // variable for the controller
  var controller = document.getElementById(id);
  // making the interval which moves the cpu
  var interval = setInterval(frame, degree);
  // function to run called frame
  function frame() {
    // getting position of the ball
    var ballPos = parseFloat(ball.style.top) - ballHeight/2;
    // getting position of the controller
    var pos = parseFloat(controller.style.top);
    // if/else which tells the bat how to move depending on the position of the ball and bat
    if (pos==ballPos) {
      return;
    } else if (pos < ballPos) {
      // increase position of controller by 1
      pos++
      controller.style.top = pos + 'vh';
      // code beneath was a try on bugfixing the shaking of the controllers, doesn't work as
      // controller hitbox will fuck up, but it does move smoother
/*
      controller.style.transition = 1 + 's';
*/
    }else {
      // decrease position of controller by 1
      pos--
      controller.style.top = pos + 'vh';

      // code beneath was a try on bugfixing the shaking of the controllers, doesn't work as
      // controller hitbox will fuck up, but it does move smoother
/*
      controller.style.transition = 1 + 's';
*/
    }
  }
}
