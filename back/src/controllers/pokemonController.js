import Pokemon from '../models/Pokemon.js';

const pokemonController = {
  async getAllPokemons(req, res) {
    try {

      const pokemons = await Pokemon.findAll();
      res.status(200).json(pokemons); // Pour renvoyer la liste des Pokémon sous forme de JSON
    } catch (error) {
        
      console.error('Erreur lors de la récupération des Pokémon :', error);
      res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des Pokémon.' });
    }
  },
};

export default pokemonController;