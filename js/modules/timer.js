function timer(id, deadline) {
  //const deadline = "2025-01-01";

  // добавить фэйковое время
  function getDeadline() {
    const now = new Date();
    const deadlineTime = new Date(now.getTime() + 72 * 60 * 1000 * 60);
    const year = deadlineTime.getFullYear();
    const month = String(deadlineTime.getMonth() + 1).padStart(2, '0');
    const day = String(deadlineTime.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  deadline = getDeadline();


  //const deadline = getDeadline();

  //console.log(getDeadline());

  function getTimeRemining(endtime) {
    let days, hours, minutes, seconds;
    const t = Date.parse(endtime) - Date.parse(new Date());

    if (t <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(t / (1000 * 60 * 60 * 24));
      hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      minutes = Math.floor((t / (1000 * 60)) % 60);
      seconds = Math.floor((t / 1000) % 60);
    }
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function getZerro(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);

    updateClock(); // Сразу обновляем таймер при запуске

    function updateClock() {
      const t = getTimeRemining(endtime);

      days.innerHTML = getZerro(t.days);
      hours.innerHTML = getZerro(t.hours);
      minutes.innerHTML = getZerro(t.minutes);
      seconds.innerHTML = getZerro(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(id, deadline);
}
//module.exports = timer;
export default timer;