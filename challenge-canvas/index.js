const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;

/**
 * person
 */
ctx.fillRect(240, 200, 20, 100);
ctx.fillRect(390, 200, 20, 100);
ctx.fillRect(280, 200, 90, 200);

ctx.beginPath();
ctx.arc(325, 120, 70, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.arc(300, 100, 10, 0, 1 * Math.PI, true);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'green';
ctx.arc(350, 100, 10, 0, 1 * Math.PI, true);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'red';
ctx.arc(325, 120, 30, 0, 1 * Math.PI);
ctx.fill();

ctx.fillRect(200, 200, 20, 200);
ctx.fillRect(400, 200, 20, 200);
ctx.lineWidth = 3;
ctx.strokeStyle = 'yellow';
ctx.strokeRect(290, 300, 40, 100);
ctx.fillRect(200, 200, 200, 20);

ctx.beginPath();

ctx.fillStyle = 'red';
ctx.moveTo(200, 200);
ctx.lineTo(325, 120);
ctx.lineTo(420, 200);
ctx.fill();
