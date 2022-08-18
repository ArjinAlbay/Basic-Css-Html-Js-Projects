let getHour = document.getElementById(`hour`);
let getMinute = document.getElementById("minute");
let getSecond = document.getElementById("second");
let getAmpm = document.getElementById("ampm");

function updateTime() {
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();
  let ampm = "AM";

  if (hour > 12) {
    hour = hour - 12;
    ampm = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  getHour.innerText = hour;
  getMinute.innerText = minute;
  getSecond.innerText = second;
  getAmpm.innerText = ampm;

  setTimeout(() => {
    updateTime();
  }, 1000);
}

updateTime();
