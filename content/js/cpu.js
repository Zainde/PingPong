function cpu(id, degree){
  var controller = document.getElementById(id);
  moving=null;
  start = Date.now();
  console.log(degree);
  var interval = setInterval(frame, degree);
  function frame() {

    controller.addEventListener('transtionstart', (event)=>{
      moving=true;
    });

    var ballPos = parseFloat(ball.style.top) - ballHeight/2;
    var pos = parseFloat(controller.style.top);

    if (pos==ballPos) {
      return;
    } else if (pos < ballPos) {
      pos++
      // controller.style.transition = 1 + 's';
      controller.style.top = pos + 'vh';
      // controller.addEventListener('transitionend' (event)=>{
      //
      // });
// transition makes it look smoother, decrease the number for it to be faster
    }else {
      pos--
      // controller.style.transition = 1 + 's';
      controller.style.top = pos + 'vh';
    }
  }
}
