let startTime, updatedTime, difference, tInterval, running = false;

function leadingZero(time) {
  return time < 10 ? `0${time}` : time;
}

function formatTime(ms) {
  const hours = leadingZero(Math.floor((ms / (1000 * 60 * 60)) % 60));
  const minutes = leadingZero(Math.floor((ms / (1000 * 60)) % 60));
  const seconds = leadingZero(Math.floor((ms / 1000) % 60));
  return `${hours}:${minutes}:${seconds}`;
}

function startStopwatch() {
  if (!running) {
    startTime = new Date().getTime() - (difference || 0);
    tInterval = setInterval(getShowTime, 1000);
    running = true;
  }
}

function getShowTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;
  document.getElementById('display').innerText = formatTime(difference);
}

function stopStopwatch() {
  if (running) {
    clearInterval(tInterval);
    running = false;
  }
}

function resetStopwatch() {
  clearInterval(tInterval);
  difference = 0;
  running = false;
  document.getElementById('display').innerText = '00:00:00';
}
