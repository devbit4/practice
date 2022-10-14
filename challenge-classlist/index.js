const body = document.querySelector('body');
const h1 = document.querySelector('h1');

function handleResize() {
  body.className = '';
  if (window.innerWidth > 1200) {
    body.classList.add('violet');
  } else if (window.innerWidth > 600) {
    body.classList.add('orange');
  } else {
    body.classList.add('blue');
  }
}

window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize);
