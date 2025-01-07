import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

const PokemonType = sequelize.define('PokemonType', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pokemon_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'pokemon_type',
    timestamps: false,
  });
  
  export { PokemonType };