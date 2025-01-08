import { Team } from '../models/Team.js';

const teamsController = {
    // Récupérer toutes les équipes
    async getAllTeams(req, res) {
        try {
            const teams = await Team.findAll();
            res.json(teams);
        } catch (error) {
            console.error('Erreur lors de la récupération des Pokémon:', error);
            res.status(500).json({error: "Une erreur est survenue lors de la récupération des Pokémon."})
        }
    },
}


export { teamsController };