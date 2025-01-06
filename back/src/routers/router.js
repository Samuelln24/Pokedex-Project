import express from 'express';
import pokemonController from '../controllers/pokemonController.js';

const router = express.Router();

// Route pour obtenir tous les Pokémon
router.get('/pokemons', pokemonController.getAllPokemons);

export default router;