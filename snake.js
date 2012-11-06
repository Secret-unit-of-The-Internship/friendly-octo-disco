var snakeGame = document.createElement('div');
snakeGame.id = 'snakeGame';
snakeGame.style.width = '500px';
snakeGame.style.height = '500px';
snakeGame.style.backgroundColor = '#000000';
snakeGame.style.position = 'relative';
document.body.appendChild(snakeGame);
var snake = document.createElement('div');
snake.id = 'snake';
snake.style.width = '10px';
snake.style.height = '10px';
snake.style.backgroundColor = '#ffffff';
snake.style.position = 'absolute';
snake.style.top = '0px';
snake.style.left = '0px';
snakeGame.appendChild(snake);
var snakeSpeed = 10;
var snakeDirection = 'right';
var snakeLength = 1;
var snakeParts = [];
var food = document.createElement('div');
food.id = 'food';
food.style.width = '10px';
food.style.height = '10px';
food.style.backgroundColor = '#ff0000';
food.style.position = 'absolute';
food.style.top = '0px';
food.style.left = '0px';
snakeGame.appendChild(food);
function moveSnake() {
  var snakeHead = snakeParts[snakeParts.length - 1];
  var newSnakePart = document.createElement('div');
  newSnakePart.style.width = '10px';
  newSnakePart.style.height = '10px';
  newSnakePart.style.backgroundColor = '#ffffff';
  newSnakePart.style.position = 'absolute';
  newSnakePart.style.top = snakeHead.style.top;
  newSnakePart.style.left = snakeHead.style.left;
  snakeGame.appendChild(newSnakePart);
  snakeParts.push(newSnakePart);
  if (snakeParts.length > snakeLength) {
    snakeGame.removeChild(snakeParts[0]);
    snakeParts.shift();
  }
  if (snakeDirection == 'right') {
    snakeHead.style.left = (parseInt(snakeHead.style.left) + snakeSpeed) + 'px';
  } else if (snakeDirection == 'left') {
    snakeHead.style.left = (parseInt(snakeHead.style.left) - snakeSpeed) + 'px';
  } else if (snakeDirection == 'up') {
    snakeHead.style.top = (parseInt(snakeHead.style.top) - snakeSpeed) + 'px';
  } else if (snakeDirection == 'down') {
    snakeHead.style.top = (parseInt(snakeHead.style.top) + snakeSpeed) + 'px';
  }
  if (parseInt(snakeHead.style.left) > parseInt(snakeGame.style.width) - parseInt(snakeHead.style.width)) {
    snakeHead.style.left = '0px';
  } else if (parseInt(snakeHead.style.left) < 0) {
    snakeHead.style.left = (parseInt(snakeGame.style.width) - parseInt(snakeHead.style.width)) + 'px';
  } else if (parseInt(snakeHead.style.top) < 0) {
    snakeHead.style.top = (parseInt(snakeGame.style.height) - parseInt(snakeHead.style.height)) + 'px';
  } else if (parseInt(snakeHead.style.top) > parseInt(snakeGame.style.height) - parseInt(snakeHead.style.height)) {
    snakeHead.style.top = '0px';
  }
}
