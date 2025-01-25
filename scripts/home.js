function updateClockAndStatus() {
  const clockElement = document.getElementById('clock');
  const statusElement = document.getElementById('status');
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  clockElement.textContent = formattedTime;

  const workingHours = {
    0: { start: 8, end: 23 },
    1: { start: 7, end: 22 },
    2: { start: 7, end: 22 },
    3: { start: 7, end: 22 },
    4: { start: 7, end: 22 },
    5: { start: 7, end: 22 },
    6: { start: 8, end: 24 },
  };

  const currentDay = now.getDay();
  const { start, end } = workingHours[currentDay];

  if (hours >= start && hours < end) {
    statusElement.textContent = 'Open';
    statusElement.style.color = 'green';
  } else {
    statusElement.textContent = 'Closed';
    statusElement.style.color = 'red';
  }
}

setInterval(updateClockAndStatus, 1000);
