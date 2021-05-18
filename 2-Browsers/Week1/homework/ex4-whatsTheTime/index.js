'use strict';
/*------------------------------------------------------------------------------
1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  // getting the right form of time
  const currentTime = new Date().toLocaleTimeString();
  // show time in the page
  document.body.textContent = currentTime;
  document.body.style.textAlign = 'center';
  // keeping time updated
  setInterval(addCurrentTime, 1000);
}

// execute `addCurrentTime` when the browser has completed loading the page
window.addEventListener('DOMContentLoaded', addCurrentTime);
