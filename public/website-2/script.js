
function displayDateTime() {
    const currentDate = new Date();
    
  
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
  
    // Add leading zeros if needed
    hours = (hours < 10 ? '0' : '') + hours;
    minutes = (minutes < 10 ? '0' : '') + minutes;
  
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('mins').innerHTML = minutes;
  }

  setInterval(displayDateTime, 1000);
  displayDateTime();
  const timebg = document.getElementById('timebg');
  const date = new Date();
  const hour = date.getHours();

  if (hour >= 6 && hour < 8) {
      timebg.style.backgroundImage = 'url("./img/bg/rff.jpg")';
} else if (hour >= 17 && hour < 18) {
timebg.style.backgroundImage = 'url("./img/bg/orange.jpg")';
} else if (hour >= 7 && hour < 17) {
timebg.style.backgroundImage = 'url("./img/bg/vert.jpg")';
} else {
timebg.style.backgroundImage = 'url("./img/bg/dark.jpg")';
}
