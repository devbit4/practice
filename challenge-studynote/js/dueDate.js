const dueDate = document.querySelector('.info__due-date  span');

const calculateDueDate = () => {
  const testDay = new Date('2022-12-01');
  const today = new Date();

  const diff = testDay - today;

  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHour = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const diffMin = Math.floor((diff / (1000 * 60)) % 60);
  const diffSec = Math.floor((diff / 1000) % 60);

  dueDate.innerText = `${diffDay}일 ${diffHour}시간 ${diffMin}분 ${diffSec}초`;
};

calculateDueDate();
setInterval(calculateDueDate, 1000);
