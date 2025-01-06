import Pokemon from './Pokemon.js';
import Type from './Type.js';
import Team from './Team.js';
import PokemonType from './Pokemon_type.js';
import TeamPokemon from './Team_pokemon.js';

// Relations entre Pokémon et Type, many-to-many
Pokemon.belongsToMany(Type, {
    through: PokemonType,
    foreignKey: 'pokemon_id',
    otherKey: 'type_id',
  });
  Type.belongsToMany(Pokemon, {
    through: PokemonType,
    foreignKey: 'type_id',
    otherKey: 'pokemon_id',
  });
  
  // Relations entre Team et Pokémon many-to-many par TeamPokemon
  Team.belongsToMany(Pokemon, {
    through: TeamPokemon,
    foreignKey: 'team_id',
    otherKey: 'pokemon_id',
  });
  Pokemon.belongsToMany(Team, {
    through: TeamPokemon,
    foreignKey: 'pokemon_id',
    otherKey: 'team_id',
  });
  
  export { Pokemon, Type, Team, PokemonType, TeamPokemon };