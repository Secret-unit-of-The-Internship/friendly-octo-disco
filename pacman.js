var pacman = document.createElement('div');
pacman.style.width = '100px';
pacman.style.height = '100px';
pacman.style.backgroundColor = 'yellow';
pacman.style.borderRadius = '50%';
pacman.style.position = 'absolute';
pacman.style.top = '0px';
pacman.style.left = '0px';
document.body.appendChild(pacman);
var pacmanMove = function(e) {
  var pacman = document.getElementsByTagName('div')[0];
  var pacmanLeft = parseInt(pacman.style.left);
  var pacmanTop = parseInt(pacman.style.top);
  var pacmanWidth = parseInt(pacman.style.width);
  var pacmanHeight = parseInt(pacman.style.height);
  var pacmanRight = pacmanLeft + pacmanWidth;
  var pacmanBottom = pacmanTop + pacmanHeight;
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var pacmanSpeed = 10;
  if (e.keyCode === 37) {
    pacman.style.left = (pacmanLeft - pacmanSpeed) + 'px';
  } else if (e.keyCode === 38) {
    pacman.style.top = (pacmanTop - pacmanSpeed) + 'px';
  } else if (e.keyCode === 39) {
    pacman.style.left = (pacmanLeft + pacmanSpeed) + 'px';
  } else if (e.keyCode === 40) {
    pacman.style.top = (pacmanTop + pacmanSpeed) + 'px';
  }
  if (pacmanLeft < 0) {
    pacman.style.left = '0px';
  } else if (pacmanTop < 0) {
    pacman.style.top = '0px';
  } else if (pacmanRight > windowWidth) {
    pacman.style.left = (windowWidth - pacmanWidth) + 'px';
  } else if (pacmanBottom > windowHeight) {
    pacman.style.top = (windowHeight - pacmanHeight) + 'px';
  }
};
document.addEventListener('keydown', pacmanMove);
