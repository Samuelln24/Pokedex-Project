const API_URL = 'http://localhost:3000/types';


async function fetchPokemonsByType(typeId) {
  try {
    const response = await fetch(`${API_URL}/${typeId}`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des Pokémon');
    }
    const { pokemons } = await response.json();
    displayPokemons(pokemons);
  } catch (error) {
    console.error('Erreur:', error);
  }
}


function displayPokemons(pokemons) {
  const app = document.getElementById('app');
  app.innerHTML = ''; 

  pokemons.forEach((pokemon) => {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');

    pokemonCard.innerHTML = `
      <img src="./assets/img/${pokemon.id}.webp" alt="${pokemon.name}" class="pkm_img" />
      <h2>${pokemon.name}</h2>
      <p>PV : ${pokemon.hp}</p>
      <p>Attaque : ${pokemon.atk}</p>
      <p>Défense : ${pokemon.def}</p>
    `;

    app.appendChild(pokemonCard);
  });


  const backButton = document.createElement('button');
  backButton.textContent = 'Retour aux types';
  backButton.classList.add('back-button');
  backButton.addEventListener('click', () => {
    window.location.href = 'all-types.html';
  });

  app.appendChild(backButton);
}


const params = new URLSearchParams(window.location.search);
const typeId = params.get('typeId');
const typeName = params.get('typeName');


document.getElementById('type-name').textContent = `Type : ${typeName}`;


fetchPokemonsByType(typeId);