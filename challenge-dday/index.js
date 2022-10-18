const remainTime = document.querySelector('.remain-time');

function diffDate() {
  const christmas = new Date('2022-10-19 00:00');

  const today = new Date();

  const diff = christmas - today;

  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));

  const diffHour = String(
    Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, '0');

  const diffMin = String(
    Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, '0');

  const diffSec = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(
    2,
    '0'
  );

  remainTime.innerHTML = `${diffDay}d ${diffHour}h ${diffMin}m ${diffSec}s `;
}

diffDate();
setInterval(diffDate, 1000);
