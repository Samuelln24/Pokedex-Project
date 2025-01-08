const API_URL = 'http://localhost:3000/pokemons'; // URL de l'API Backend

// C'est une fonction faite pour récupérer les Pokémon depuis l'API
async function fetchPokemons() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des Pokémon');
    }
    const pokemons = await response.json();
    displayPokemons(pokemons);
    
  } catch (error) {
    console.error('Erreur:', error);
  }
}

// Celle la sert à afficher les Pokémon dans le DOM
function displayPokemons(pokemons) {
  const app = document.getElementById('app');
  app.innerHTML = ''; // Cela permet de réinitialiser le contenu avant d'ajouter les cartes

  pokemons.forEach((pokemon) => {
    const card = document.createElement('div');
    card.classList.add('card', 'mb-6', 'has-text-centered', 'pt-4', 'my-6');

    card.innerHTML = `
      <a>
        <div class="card-image">
          <img class="pkm_img" src="./assets/img/${pokemon.id}.webp" alt="${pokemon.name}" />
        </div>
        <div class="card-content">
          <p>${pokemon.name}</p>
        </div>
      </a>
    `;

    // C'est l'écouteur pour ouvrir la modale
    card.addEventListener('click', () => openPokemonModal(pokemon));

    app.appendChild(card);
  });
}

// Fonction pour ouvrir la modale avec les détails du Pokémon
function openPokemonModal(pokemon) {
  const modal = document.getElementById('pkm_detail');

  // Ici on met à jour les données dans la modale
  modal.querySelector('.pkm_name').textContent = pokemon.name;
  modal.querySelector('.pkm_img_modal').src = `./assets/img/${pokemon.id}.webp`;
  modal.querySelector('.pokemon-hp').textContent = pokemon.hp;
  modal.querySelector('.pokemon-atk').textContent = pokemon.atk;
  modal.querySelector('.pokemon-def').textContent = pokemon.def;
  modal.querySelector('.pokemon-atk_spe').textContent = pokemon.atk_spe;
  modal.querySelector('.pokemon-def_spe').textContent = pokemon.def_spe;
  modal.querySelector('.pokemon-speed').textContent = pokemon.speed;

  // Affiche la modale
  modal.classList.add('is-active');

  // Ferme la modale au clic sur tous les boutons de fermeture présent ds mon fichier html
  const closeButtons = modal.querySelectorAll('.close, .modal-background');
  closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      modal.classList.remove('is-active');
    });
  });
}

// Charge les Pokémon au chargement de la page
fetchPokemons();