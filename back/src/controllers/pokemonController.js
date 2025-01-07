import { Pokemon } from '../models/Pokemon.js';
import { Type } from '../models/Type.js';

const pokemonController = {
  // Récupérer tous les Pokémon
  async getAllPokemons(req, res) {
    try {
      const pokemons = await Pokemon.findAll();
      res.json(pokemons);
    } catch (error) {
      console.error('Erreur lors de la récupération des Pokémon:', error);
      res.status(500).json({ error: "Une erreur est survenue lors de la récupération des Pokémon." });
    }
  },

  // Récupérer tous les types
  async getAllTypes(req, res) {
    try {
      const types = await Type.findAll();
      res.json(types);
    } catch (error) {
      console.error('Erreur lors de la récupération des types:', error);
      res.status(500).json({ error: "Une erreur est survenue lors de la récupération des types." });
    }
  },
};

export { pokemonController };