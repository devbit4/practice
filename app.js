const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

/**
 * rect
 */
// canvas.width = 800;
// canvas.height = 800;

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
ctx.beginPath();
ctx.moveTo(75, 40);
ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
ctx.fill();
