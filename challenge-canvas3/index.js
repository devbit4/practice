const canvas = document.querySelector('canvas');
const color = document.querySelector('#color');
const colorOptions = Array.from(document.querySelectorAll('.color-option'));
const fillBtn = document.querySelector('#fill-btn');
const strokeBtn = document.querySelector('#stroke-btn');
const modeBtn = document.querySelector('#mode-btn');
const eraseBtn = document.querySelector('#eraser-btn');
const destroyBtn = document.querySelector('#destroy-btn');
const fileInput = document.querySelector('#file');
const textInput = document.querySelector('#text');
const saveBtn = document.querySelector('#save');

const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 600;

ctx.lineWidth = 5;
ctx.lineCap = 'round';

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

/**
 * 지우개
 */
function onEraserClick() {
  ctx.strokeStyle = 'white';
  isBgFilling = false;
  modeBtn.innerText = 'BackgroundFill';
}

function onDestroyClick() {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, 600, 600);
}

/**
 * 배경 이미지 변경
 */
function onFileChange(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, 600, 600);
    fileInput.value = null;
  };
}

/**
 * 텍스트 입력
 */
function onDoubleClick(event) {
  const text = textInput.value;
  if (text !== '') {
    ctx.save();
    ctx.lineWidth = 1;
    ctx.font = '32px sans-serif';
    ctx.fillText(text, event.offsetX, event.offsetY);
    ctx.save();
  }
}

/**
 * 메모장 저장
 */
function onSaveClick() {
  const url = canvas.toDataURL();
  const a = document.createElement('a');
  a.href = url;
  a.download = '파일이름';
  a.click();
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

//파일 업로드
fileInput.addEventListener('change', onFileChange);

//텍스트
canvas.addEventListener('dblclick', onDoubleClick);

//저장
saveBtn.addEventListener('click', onSaveClick);
