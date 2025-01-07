import { Pokemon } from '../models/Pokemon.js';
import { Type } from '../models/Type.js';
import { PokemonType } from '../models/PokemonType.js';

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

  // Récupérer les Pokémon par type
  async getTypeWithPokemons(req, res) {
    try {
      const { id } = req.params;

      // Pr vérifier si le type existe
      const type = await Type.findByPk(id);
      if (!type) {
        return res.status(404).json({ error: `Type avec l'id ${id} non trouvé.` });
      }

      // Afin de récupérer les Pokémon associés au type
      const pokemonTypes = await PokemonType.findAll({ where: { type_id: id } });

      const pokemonIds = pokemonTypes.map((pokemonType) => pokemonType.pokemon_id);
      const pokemons = await Pokemon.findAll({ where: { id: pokemonIds } });

      res.status(200).json({ type, pokemons });
    } catch (error) {
      console.error('Erreur lors de la récupération des Pokémon pour un type :', error);
      res
        .status(500)
        .json({ error: 'Une erreur est survenue lors de la récupération des Pokémon pour ce type.' });
    }
  },
};

export { pokemonController };