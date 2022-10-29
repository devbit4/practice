const canvas = document.querySelector('canvas');
const color = document.querySelector('#color');
const colorOptions = Array.from(document.querySelectorAll('.color-option'));
const fillBtn = document.querySelector('#fill-btn');
const strokeBtn = document.querySelector('#stroke-btn');
const modeBtn = document.querySelector('#mode-btn');
const eraseBtn = document.querySelector('#eraser-btn');
const destroyBtn = document.querySelector('#destroy-btn');

const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 600;

ctx.lineWidth = 5;
let isPainting = false;
let isFilling = false;
let isBgFilling = false;

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

/**
 * 브러쉬 색 변경
 */
function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

function onColorClick(event) {
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
}

/**
 * 브러쉬 타입 변경
 */
function onFillClick() {
  isFilling = true;
}

function onStrokeClick() {
  isFilling = false;
}

/**
 * 배경 색 변경
 */
function onModeClick() {
  if (isBgFilling) {
    isBgFilling = false;
    modeBtn.innerText = 'BackgroundFill';
  } else {
    isBgFilling = true;
    modeBtn.innerText = 'BackgroundDraw';
  }
}

function onCanvasClick() {
  if (isBgFilling) {
    ctx.fillRect(0, 0, 600, 600);
  }
}

function onEraserClick() {
  ctx.strokeStyle = 'white';
  isBgFilling = false;
  modeBtn.innerText = 'BackgroundFill';
}

function onDestroyClick() {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, 600, 600);
}

canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);

// 브러쉬 색
color.addEventListener('change', onColorChange);
colorOptions.forEach((color) => {
  color.addEventListener('click', onColorClick);
});

// 브러쉬 타입
fillBtn.addEventListener('click', onFillClick);
strokeBtn.addEventListener('click', onStrokeClick);

// 배경
modeBtn.addEventListener('click', onModeClick);
canvas.addEventListener('click', onCanvasClick);

// 지우개
eraseBtn.addEventListener('click', onEraserClick);
destroyBtn.addEventListener('click', onDestroyClick);
