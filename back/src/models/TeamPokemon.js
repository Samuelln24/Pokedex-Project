import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

const TeamPokemon = sequelize.define('TeamPokemon', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pokemon_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'team_pokemon',
    timestamps: false,
  });
  
  export { TeamPokemon };