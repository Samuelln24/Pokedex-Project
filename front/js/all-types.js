const API_URL = 'http://localhost:3000/types';


async function fetchTypes() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des types');
    }
    const types = await response.json();
    displayTypes(types);
  } catch (error) {
    console.error('Erreur:', error);
  }
}

function displayTypes(types) {
  const app = document.getElementById('app');
  app.innerHTML = ''; 

  types.forEach((type) => {
    const typeCard = document.createElement('div');
    typeCard.classList.add('type-card');
    typeCard.style.backgroundColor = `#${type.color}`;

    typeCard.innerHTML = `
      <h2>${type.name}</h2>
      <button class="view-pokemons-btn" data-type-id="${type.id}">Voir les Pokémon</button>
    `;

    
    const button = typeCard.querySelector('.view-pokemons-btn');
    button.addEventListener('click', () => {
      window.location.href = `type-details.html?typeId=${type.id}&typeName=${encodeURIComponent(type.name)}`;
    });

    app.appendChild(typeCard);
  });
}


fetchTypes();