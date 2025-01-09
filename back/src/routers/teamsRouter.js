import { Router } from 'express';
const teamsRouter = Router();

import { teamsController } from '../controllers/teamsController.js';

// Route pour obtenir toutes les équipes
teamsRouter.get('/teams', teamsController.getAllTeams);
teamsRouter.post('/teams', teamsController.createTeams);
// Route pour ajouter un pokémon à une équipe
teamsRouter.post('/teams/:idTeam/pokemons', teamsController.addPokemonToTeam);

export default teamsRouter;