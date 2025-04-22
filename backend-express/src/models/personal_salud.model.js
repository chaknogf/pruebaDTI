import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const PersonalSalud = sequelize.define('PersonalSalud', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  cui: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  ue: {
    type: DataTypes.STRING(150),
    allowNull: false
  }
});

export default PersonalSalud;