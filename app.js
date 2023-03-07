const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");

const updateTime = () => {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  if (hour > 12) {
    hour -= 12;
  }

  hourEl.textContent = hour.toString().padStart(2, 0);
  minuteEl.textContent = minutes.toString();
};

setInterval(updateTime, 1000);
updateTime();
