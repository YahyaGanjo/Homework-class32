'use strict';
/*------------------------------------------------------------------------------
1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/
function hijackGoogleLogo() {
  // TODO your code goes in here
  const logo = document.querySelector('img[alt="Google"]');
  logo.src = 'https://avatars.githubusercontent.com/u/20858568?s=200&v=4';
  logo.srcset = 'https://avatars.githubusercontent.com/u/20858568?s=200&v=4';
}

hijackGoogleLogo();
