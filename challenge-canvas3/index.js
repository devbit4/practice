const canvas = document.querySelector('canvas');
const color = document.getElementById('color');
const colorOptions = Array.from(document.querySelectorAll('.color-option'));
const fill = document.getElementById('fill');
const stroke = document.getElementById('stroke');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

ctx.lineWidth = 5;
let isPainting = false;
let isFilling = false;

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
}

function startPainting() {
  ctx.beginPath();
  isPainting = true;
}

function cancelPainting() {
  isPainting = false;

  if (isFilling) {
    ctx.fill();
  }
}

function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

function onFillClick() {
  isFilling = true;
}

function onStrokeClick() {
  isFilling = false;
}

function onColorClick(event) {
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
}

canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);

// 브러쉬
color.addEventListener('change', onColorChange);
fill.addEventListener('click', onFillClick);
stroke.addEventListener('click', onStrokeClick);

colorOptions.forEach((color) => {
  color.addEventListener('click', onColorClick);
});
