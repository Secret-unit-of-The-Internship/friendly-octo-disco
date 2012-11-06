/* Make a colorful ball jump around the screen */
var ball = document.createElement('div');
ball.style.width = '50px';
ball.style.height = '50px';
ball.style.borderRadius = '25px';
ball.style.backgroundColor = 'red';
ball.style.position = 'absolute';
ball.style.top = '0px';
ball.style.left = '0px';
document.body.appendChild(ball);
var x = 0;
var y = 0;
var xVelocity = 1;
var yVelocity = 1;
function update() {
  x += xVelocity;
  y += yVelocity;
  if (x > window.innerWidth - 50) {
    xVelocity = -1;
  }
  if (y > window.innerHeight - 50) {
    yVelocity = -1;
  }
  if (x < 0) {
    xVelocity = 1;
  }
  if (y < 0) {
    yVelocity = 1;
  }
  ball.style.left = x + 'px';
  ball.style.top = y + 'px';
  window.requestAnimationFrame(update);
}
update();
