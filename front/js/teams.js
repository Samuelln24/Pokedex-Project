const API_URL = 'http://localhost:3000/teams';

// Fonction pour récupérer les équipes depuis l'API
async function fetchTeams() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des Equipes');
        }
        const teams = await response.json();
        displayTeams(teams);

    } catch (error) {
        console.error('Erreur:', error);
    }
}

// Fonction pour afficher les equipes dans le DOM

function displayTeams(teams) {
    const app = document.getElementById('app');
    app.innerHTML = '';



    teams.forEach((team) => {
        const teamList = document.createElement('div');
        teamList.classList.add('list');
       
        teamList.innerHTML = `
        <a>
        <div class="list-content">
          <h1>${team.name}</h1>
          <p>${team.description}</p>
        </div>
      </a>
      `;

        app.appendChild(teamList);

    })
}

fetchTeams();