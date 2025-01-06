import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

const Type = sequelize.define('Type', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING(7),
    allowNull: false,
  },
}, {
  tableName: 'type',
  timestamps: false,
});

export default Type;