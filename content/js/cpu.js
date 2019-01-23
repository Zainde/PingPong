function cpu(id){
  var controller = document.getElementById(id);
  var interval = setInterval(frame, 40);
  function frame() {
    var ballPos = parseFloat(ball.style.top);
    var pos = parseFloat(controller.style.top);
    if (pos == ballPos) {
    } else if (pos < ballPos) {
      pos++;
      controller.style.top = pos + 'vh';
    }else {
      pos--;
      controller.style.top = pos + 'vh';
    }
  }

}
