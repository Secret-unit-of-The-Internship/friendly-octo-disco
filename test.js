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

/* Create a web page with users and email addresses */
var users = [
  {
    name: 'John',
    email: 'john@example.com'
  },
  {
    name: 'Jane',
    email: 'jane@example.com'
  },
  {
    name: 'Bob',
    email: 'bob@example.com'
  }
];
var table = document.createElement('table');
table.style.border = '1px solid black';
table.style.borderCollapse = 'collapse';
var headerRow = document.createElement('tr');
var nameHeader = document.createElement('th');
nameHeader.innerHTML = 'Name';
nameHeader.style.border = '1px solid black';
nameHeader.style.padding = '5px';
var emailHeader = document.createElement('th');
emailHeader.innerHTML = 'Email';
emailHeader.style.border = '1px solid black';
emailHeader.style.padding = '5px';
headerRow.appendChild(nameHeader);
headerRow.appendChild(emailHeader);
table.appendChild(headerRow);
for (var i = 0; i < users.length; i++) {
  var user = users[i];
  var row = document.createElement('tr');
  var nameCell = document.createElement('td');
  nameCell.innerHTML = user.name;
  nameCell.style.border = '1px solid black';
  nameCell.style.padding = '5px';
  var emailCell = document.createElement('td');
  emailCell.innerHTML = user.email;
  emailCell.style.border = '1px solid black';
  emailCell.style.padding = '5px';
  row.appendChild(nameCell);
  row.appendChild(emailCell);
  table.appendChild(row);
}
document.body.appendChild(table);

/* Generate a matrix */
var matrix = document.createElement('div');
matrix.style.position = 'absolute';
matrix.style.top = '0px';
matrix.style.left = '0px';
matrix.style.width = '100%';
matrix.style.height = '100%';
matrix.style.backgroundColor = 'black';
matrix.style.color = 'green';
matrix.style.fontFamily = 'monospace';
matrix.style.fontSize = '10px';
matrix.style.overflow = 'hidden';
document.body.appendChild(matrix);
var columns = [];
for (var i = 0; i < 100; i++) {
  var column = document.createElement('div');
  column.style.position = 'absolute';
  column.style.left = (i * 10) + 'px';
  column.style.width = '10px';
  column.style.height = '100%';
  matrix.appendChild(column);
  columns.push(column);
}
function updateMatrix() {
  for (var i = 0; i < columns.length; i++) {
    var column = columns[i];
    var top = column.offsetTop;
    if (top > window.innerHeight && Math.random() > 0.975) {
      column.style.top = '-10px';
      column.textContent = String.fromCharCode(1e2 + Math.random() * 33);
    }
    column.style.top = top + 10 + 'px';
  }
  requestAnimationFrame(updateMatrix);
}
updateMatrix();
