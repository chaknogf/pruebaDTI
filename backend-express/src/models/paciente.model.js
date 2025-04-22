import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Paciente = sequelize.define('Paciente', {
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
    allowNull: false,
    unique: true
  },
  nacimiento: {
    type: DataTypes.DATE,
    allowNull: false
  },
  direccion: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  telefono: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default Paciente;
