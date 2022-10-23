const colors = ['orange', 'green', 'blue', 'darkblue', 'purple'];

const board = document.querySelector('#board');

const changeBgColor = () => {
  const random = Math.floor(Math.random() * 5);
  board.style.background = colors[random];
};

changeBgColor();
