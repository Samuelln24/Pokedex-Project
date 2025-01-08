const API_URL = 'http://localhost:3000/teams';

// Fonction pour récupérer les équipes depuis l'API
async function fetchTeams() {
    try {
        displayLoading(); // Montre un message d'attente
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des Equipes');
        }
        const teams = await response.json();
        displayTeams(teams);

    } catch (error) {
        console.error('Erreur:', error);
        displayError(); // Affiche une erreur
    }
}

// Fonction pour afficher un message de chargement
function displayLoading() {
    const app = document.getElementById('app');
    app.innerHTML = `<p class="has-text-centered has-text-info">Chargement des équipes...</p>`;
}

// Fonction pour afficher une erreur
function displayError() {
    const app = document.getElementById('app');
    app.innerHTML = `<p class="has-text-centered has-text-danger">Impossible de charger les équipes. Veuillez réessayer plus tard.</p>`;
}

// Fonction pour afficher les equipes dans le DOM

function displayTeams(teams) {
    const app = document.getElementById('app');
    app.innerHTML = '';



    teams.forEach((team) => {
        const teamCard = document.createElement('div');
        teamCard.classList.add('list');

        teamCard.innerHTML = `
        <a>
          <div class="list-content">
            <h2>${team.name}</h2>
            <p>${team.description}</p>
          </div>
        </a>
      `;

        app.appendChild(teamCard);

    });
}

fetchTeams();