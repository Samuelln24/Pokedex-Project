import { pokemonController } from '../controllers/pokemonController.js';
import { Router } from 'express';

const router = Router();

// Route pour obtenir tous les Pokémon
router.get('/pokemons', pokemonController.getAllPokemons);
// Tous les types
router.get('/types', pokemonController.getAllTypes);
// Recup les pokemons par type
router.get('/types/:id', pokemonController.getTypeWithPokemons);

export default router;