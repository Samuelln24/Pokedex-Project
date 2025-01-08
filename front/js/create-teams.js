const API_URL = 'http://localhost:3000/teams';

// Fonction faite pour afficher un message d'erreur
function showError(message) {
    const errorDiv = document.getElementById('error-message');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    setTimeout(() => {
    errorDiv.style.display = 'none';
    }, 2000);
}

// Fonction crée pour afficher un message de succès
function showSuccess(message) {
    const successDiv = document.getElementById('success-message');
    successDiv.textContent = message;
    successDiv.style.display = 'block';
  setTimeout(() => {
    successDiv.style.display = 'none';
   }, 2000);
}

// Cette fonction est faite pour créer une équipe

async function createTeam(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form); // ligne qui sert à récupérer les données du formulaire  
    const dataObj = Object.fromEntries(formData); // ligne qui sert à transformer les données en objet JS


    try {

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataObj),
    });

    const maybeNewTeam = await response.json();

    if (!response.ok) {
        return showError(maybeNewTeam.error || 'Une erreur est survenue.');
    }

    console.log('Équipe créée avec succès :', maybeNewTeam);
    //showSuccess('Equipe créer avec succès !');

    form.reset();

    } catch (error) {
        console.error('Erreur lors de la création de l\'équipe :', error);
        showError('Une erreur réseau est survenue.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM chargé');
    const form = document.getElementById('create-team-form');
    if (!form) {
        console.error("Le formulaire 'create-team-form' est introuvable.");
        return;
    }
    console.log('Formulaire trouvé :', form);
    form.addEventListener('submit', createTeam);

    
});