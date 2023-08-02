// Get Reference
let pokedexContainer = document.querySelector('#pokedex-container');

for (let pokemon of pokedex) {
  // Create a Div for Each Pokemon and Give it a Class of Pokemon
  let pokemonDiv = document.createElement('div');
  pokemonDiv.setAttribute('class', 'pokemon');

  /* Let's grab each piece of information and make an element for it */
  // Name
  let pokemonName = document.createElement('h1');
  pokemonName.setAttribute('class', 'name');
  pokemonName.innerHTML = pokemon.name.english;
  pokemonDiv.appendChild(pokemonName);

  // Type
  let pokemonTypes = document.createElement('div');
  pokemonTypes.setAttribute('class', 'types');

  // Loop through each type in the type array (even if it's one it'll still be an array)
  for (let type of pokemon.type) {
    let pokemonType = document.createElement('p');
    pokemonType.innerHTML = type;

    // Append to pokemonTypes
    pokemonTypes.appendChild(pokemonType);
  }

  // Append all types (pokemonTypes) to pokemonDiv
  pokemonDiv.appendChild(pokemonTypes);

  // Append the pokemonDiv to pokedexContainer
  pokedexContainer.appendChild(pokemonDiv);
}

/* EXTRA CREDIT: 
- Add logic to change the type background color depending on the type
- Add all the base stats too!
*/
