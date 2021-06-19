'use strict';

/*------------------------------------------------------------------------------
Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  // TODO complete this function
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchAndPopulatePokemons(button, select) {
  // TODO complete this function
  try {
    const pokemonsObj = await fetchData(
      'https://pokeapi.co/api/v2/pokemon?limit=151'
    );
    const pokemonsArr = pokemonsObj.results;
    button.addEventListener(
      'click',
      () => {
        pokemonsArr.forEach((ele) => {
          const pokemonsName = ele.name;
          const option = createAppend(select, 'option');
          option.textContent = pokemonsName;
        });
      },
      { once: true }
    );
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchImage(pokemonsName) {
  // TODO complete this function
  try {
    const pokemonsImg = createAppend(document.body, 'img');
    const pokemonsObj = await fetchData(
      `https://pokeapi.co/api/v2/pokemon/${pokemonsName}`
    );
    pokemonsImg.src = pokemonsObj.sprites.front_default;
  } catch (error) {
    console.log(error);
  }
}
function createAppend(parentElement, newElement) {
  const element = document.createElement(newElement);
  parentElement.appendChild(element);
  return element;
}

function main() {
  // TODO complete this function
  const div = createAppend(document.body, 'div');
  const button = createAppend(div, 'button');
  button.type = 'button';
  button.textContent = 'Get Pokemon!';
  const select = createAppend(div, 'select');
  fetchAndPopulatePokemons(button, select);
  select.addEventListener('change', (e) => {
    if (select.value) {
      e.preventDefault;
      fetchImage(select.value);
    }
  });
}

window.addEventListener('load', main);
