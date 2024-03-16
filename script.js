setInterval(showTime, 1000);

function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let session = "AM";

  /* Setting time for 12 Hrs format */
  if (hour >= 12) {
    if (hour > 12) hour -= 12;
    session = "PM";
  } else if (hour == 0) {
    hr = 12;
    session = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + ":" + min + ":" + sec + session;

  document.getElementById("clock").innerHTML = currentTime;
}

showTime();
