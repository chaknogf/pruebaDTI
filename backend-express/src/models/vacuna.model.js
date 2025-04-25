import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Vacuna = sequelize.define('Vacuna', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  id_paciente: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
  ,
  tipo_vacuna: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fecha_aplicacion: {
    type: DataTypes.DATE,
    allowNull: false
  },
  lote: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  persona_administra: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default Vacuna;