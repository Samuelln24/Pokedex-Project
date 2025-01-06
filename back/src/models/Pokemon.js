import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

const Pokemon = sequelize.define('Pokemon', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    atk: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    def: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    atk_spe: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    def_spe: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'pokemon',
    timestamps: false,
  });
  
  export default Pokemon;