'use strict';
/*------------------------------------------------------------------------------
1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/
function catWalk() {
  // select img and bring it to the left edge
  const cat = document.querySelector('img');

  let position = 0;

  // to keep the img moving
  let moveTheCat = setInterval(moveCat, 50);

  // to insure the cat dance only once in each catWalk() loop
  let isDanced = false;

  // This function to move the cat 10px every 50 millisecond
  function moveCat() {
    cat.style.left = `${position}px`;
    position += 10;

    // restart the cat moving from the left side when it reaches the right edge
    if (position >= document.body.clientWidth - cat.width) {
      position = 0;
      isDanced = false;
    }
    // switch to dance cat then back to the original
    if (
      position >= document.body.clientWidth / 2 - cat.width / 2 &&
      !isDanced
    ) {
      clearInterval(moveTheCat);
      cat.src =
        'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
      isDanced = true;
      setTimeout(function () {
        moveTheCat = setInterval(moveCat, 50);
        cat.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
      }, 5000);
    }
  }
}

// executing `catWalk` when the browser has completed loading the page
window.addEventListener('DOMContentLoaded', catWalk);
