const timer = (deadline) => {
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');

  const getTwoDigit = num => String(num).length === 1 ? '0' + num : num;

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = Date.now();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let hours = Math.floor((timeRemaining / 60 / 60) % 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    hours = getTwoDigit(hours);
    minutes = getTwoDigit(minutes);
    seconds = getTwoDigit(seconds);

    return { timeRemaining, hours, minutes, seconds };
  };

  const updateClock = () => {
    let { timeRemaining, hours, minutes, seconds } = getTimeRemaining();

    if (timeRemaining < 1) {
      clearInterval(idInterval);
    } else {
      timerHours.textContent = hours;
      timerMinutes.textContent = minutes;
      timerSeconds.textContent = seconds;
    }
  };

  const idInterval = setInterval(updateClock, 1000);
};

export default timer;