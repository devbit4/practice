// const butotn = document.querySelector('button');
// const result = document.querySelector('.result');

// const limitNum = document.querySelector('.limit-num');
// const chosenNum = document.querySelector('.chosen-num');

// const selectedNum = document.querySelector('.selected-num');
// const machineNum = document.querySelector('.machine-num');

// const resultMessage = document.querySelector('.result-message');

// butotn.addEventListener('click', () => {
//   const limitNumValue = Number(limitNum.value);
//   const chosenNumValue = Number(chosenNum.value);

//   if (!limitNumValue || !chosenNumValue) return;

//   const randomNum = Math.floor(Math.random() * (limitNumValue + 1));

//   selectedNum.innerHTML = chosenNumValue;
//   machineNum.innerHTML = randomNum;

//   if (chosenNumValue === randomNum) {
//     resultMessage.innerHTML = 'You Win';
//   } else {
//     resultMessage.innerHTML = 'You Lose';
//   }

//   result.classList.remove('hidden');
// });

const guessForm = document.getElementById('js-guess');
const result = document.getElementById('js-result');
const maxNumber = document.getElementById('maxNumber');

function handleGuessSubmit(e) {
  e.preventDefault();
  const guessInput = guessForm.querySelector('input');
  if (guessInput.value === '' || maxNumber === '') {
    return;
  }
  const max = maxNumber.value;
  const random = Math.ceil(Math.random() * max);
  const userGuess = parseInt(guessInput.value, 10);
  const resultSpan = result.querySelector('span');
  resultSpan.innerHTML = `
    You chose: ${userGuess},
    the machine chose: ${random}.<br />
    <strong>${userGuess === random ? 'You won!' : 'You lost!'}</strong>
    `;
}

guessForm.addEventListener('submit', handleGuessSubmit);
