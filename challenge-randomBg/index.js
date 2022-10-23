const colors = [
  '#ef5777',
  '#575fcf',
  '#4bcffa',
  '#34e7e4',
  '#0be881',
  '#f53b57',
  '#3c40c6',
  '#0fbcf9',
  '#00d8d6',
  '#05c46b',
  '#ffc048',
  '#ffdd59',
  '#ff5e57',
  '#d2dae2',
  '#485460',
  '#ffa801',
  '#ffd32a',
  '#ff3f34',
];

const body = document.querySelector('body');
const btn = document.querySelector('button');

function changeColor() {
  const ran1 = Math.floor(Math.random() * 18);
  const ran2 = Math.floor(Math.random() * 18);

  body.style.background = `linear-gradient(to left top, ${colors[ran1]}, ${colors[ran2]})`;
}

changeColor();
btn.addEventListener('click', changeColor);
