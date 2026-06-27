// Portland, OR clock
let timeDisplay = document.getElementById("time");

function refreshTime() {
  let dateString = new Date().toLocaleTimeString("en-US", {timeZone: "America/Los_Angeles"});
  let formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}

setInterval(refreshTime, 1000);


// better summary/details scrolling behavior when toggled
document.querySelectorAll('details').forEach((details) => {
    details.addEventListener('toggle', (event) => {
      if (details.open) {
        details.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  