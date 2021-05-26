'use strict';
/*------------------------------------------------------------------------------
1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/

// Changing the font-family of the body
document.body.style.fontFamily = 'Arial, sans-serif';

// Replacing each span with own information.
const nickname = document.getElementById('nickname');
nickname.textContent = 'Yahya';
const favoriteFood = document.getElementById('fav-food');
favoriteFood.textContent = 'Pizza';
const hometown = document.getElementById('hometown');
hometown.textContent = 'Aleppo';

// Adding class `list-item` to li
const lis = Array.from(document.querySelectorAll('li'));
lis.forEach((li) => (li.className = 'list-item'));
