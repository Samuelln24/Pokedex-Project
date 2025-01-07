import { pokemonController } from '../controllers/pokemonController.js';
import { Router } from 'express';

const router = Router();

// Route pour obtenir tous les Pokémon
router.get('/pokemons', pokemonController.getAllPokemons);
// Tous les types
router.get('/types', pokemonController.getAllTypes);

export default router;