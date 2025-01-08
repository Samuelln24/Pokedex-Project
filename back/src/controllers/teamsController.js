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

    async createTeams(req, res) {

        try {
            const { name, description } = req.body;            

            // Vérifier les données entrées par l'utilisateur (vu avec Joi en cour : A tester la prochaine fois !!)
            if (!name || name.trim() === '') {
                return res.status(400).json({ error: "Le champ 'name' est obligatoire." });
            }
            if (name.lenght > 255) {
                return res.status(400).json({ error: "Le champ 'name' doit contenir moins de 255 caractères." });
            }
            if (!description || description.trim() === '') {
                return res.status(400).json({ error: "Le champ 'description' est obligatoire." });
            }
            const existingTeam = await Team.findOne({ where: { name } });
            if (existingTeam) {
                return res.status(400).json({ error: "Une équipe avec ce nom existe déjà." });
            }


            const createdteams = await Team.create({
                name,
                description,
            });

            res.status(201).json(createdteams);
            
        } catch (error) {
            console.error("Erreur lors de la création d'une équipe:", error);
            res.status(500).json({error: "Une erreur est survenue lors de la création d'une équipe."});
        }
    },
}


export { teamsController };