import { Router } from 'express';
const teamsRouter = Router();

import { teamsController } from '../controllers/teamsController.js';

// Route pour obtenir toutes les équipes
teamsRouter.get('/teams', teamsController.getAllTeams);



export default teamsRouter;