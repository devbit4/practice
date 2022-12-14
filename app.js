const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const lineWidth = document.getElementById('line-width');
const color = document.getElementById('color');

canvas.width = 800;
canvas.height = 800;

/**
 * rect
 */
// ctx.rect(50, 50, 100, 100);
// ctx.rect(150, 150, 100, 100);
// ctx.rect(250, 250, 100, 100);
// ctx.fill();

// //새 경로
// ctx.beginPath();
// ctx.rect(350, 350, 100, 100);
// ctx.fillStyle = 'yellow';
// ctx.fill();

/**
 * heart
 */
// ctx.beginPath();
// ctx.moveTo(75, 40);
// ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
// ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
// ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
// ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
// ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
// ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
// ctx.fill();

/**
 * house
 */
// ctx.fillRect(200, 200, 20, 200);
// ctx.fillRect(400, 200, 20, 200);
// ctx.lineWidth = 3;
// ctx.strokeStyle = 'yellow';
// ctx.strokeRect(290, 300, 40, 100);
// ctx.fillRect(200, 200, 200, 20);

// ctx.beginPath();
// ctx.lineWidth = 3;
// ctx.fillStyle = 'red';
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(420, 200);
// ctx.fill();

/**
 * person
 */
// ctx.fillRect(400, 200, 15, 100);
// ctx.fillRect(200, 200, 15, 100);
// ctx.fillRect(280, 200, 60, 200);

// ctx.arc(310, 120, 50, 0, 2 * Math.PI);
// ctx.fill();

// ctx.beginPath();
// ctx.arc(290, 100, 5, 0, 2 * Math.PI);
// ctx.arc(330, 100, 5, 0, 2 * Math.PI);
// ctx.fillStyle = 'red';
// ctx.fill();

/**
 * draw colorful lines
 */
// ctx.lineWidth = 2;

// const colors = [
//   'red',
//   'orange',
//   'yellow',
//   'green',
//   'blue',
//   'darkblue',
//   'purple',
// ];

// function onClick(event) {
//   ctx.beginPath();
//   ctx.moveTo(0, 0);

//   const color = colors[Math.floor(Math.random() * colors.length)];
//   ctx.strokeStyle = color;
//   ctx.lineTo(event.offsetX, event.offsetY);
//   ctx.stroke();
// }

// // canvas.addEventListener('click', onClick);
// canvas.addEventListener('mousemove', onClick);

/**
 * draw a line when mouse moves
 */
ctx.lineWidth = lineWidth.value;
let isPainting = false;

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting() {
  isPainting = true;
}

function endPainting() {
  isPainting = false;
}

//브러쉬 크기 변경
function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
}

//브러쉬 컬러 변경
function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', endPainting);
// 버그 수정: 영역 밖으로 벗어날때 브러쉬 오작동
canvas.addEventListener('mouseleave', endPainting);

lineWidth.addEventListener('change', onLineWidthChange);
color.addEventListener('change', onColorChange);
