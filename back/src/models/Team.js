import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

const Team = sequelize.define('Team', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
  }, {
    tableName: 'team',
    timestamps: false,
  });
  
  export { Team };