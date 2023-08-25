setInterval(() => {
    const d = new Date();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();
    const hourRotation = 30 * hours + minutes / 2;
    const minuteRotation = 6 * minutes;
    const secondRotation = 6 * seconds;
  
    document.getElementById("hours").style.transform = `rotate(${hourRotation}deg)`;
    document.getElementById("minute").style.transform = `rotate(${minuteRotation}deg)`;
    document.getElementById("second").style.transform = `rotate(${secondRotation}deg)`;
  }, 1000);
  