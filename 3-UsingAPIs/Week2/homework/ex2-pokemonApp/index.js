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
function fetchData(url) {
  // TODO complete this function
  return fetch(url);
}

async function fetchAndPopulatePokemons(response) {
  // TODO complete this function
  try {
    const pokemonsObj = await response.json();
    const pokemonsArr = pokemonsObj.results;
    const button = document.querySelector('button');
    const select = document.querySelector('select');
    button.addEventListener(
      'click',
      () => {
        pokemonsArr.forEach((ele) => {
          const pokemonsName = ele.name;
          const option = document.createElement('option');
          option.textContent = pokemonsName;
          select.appendChild(option);
        });
      },
      { once: true }
    );
  } catch (error) {
    console.log(error);
  }
}

function fetchImage() {
  // TODO complete this function
  const pokemonsImg = document.createElement('img');
  document.body.appendChild(pokemonsImg);
  const select = document.querySelector('select');
  select.addEventListener('change', (e) => {
    if (select.value) {
      e.preventDefault;
      fetchData(`https://pokeapi.co/api/v2/pokemon/${select.value}`)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          pokemonsImg.src = response.sprites.front_default;
        })
        .catch(console.log);
    }
  });
}

function main() {
  // TODO complete this function
  const div = document.createElement('div');
  document.body.prepend(div);
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = 'Get Pokemon!';
  div.appendChild(button);
  const select = document.createElement('select');
  div.appendChild(select);
  fetchData('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
    .then((data) => fetchAndPopulatePokemons(data))
    .catch((error) => console.log(error));
  fetchImage();
}

window.addEventListener('load', main);
