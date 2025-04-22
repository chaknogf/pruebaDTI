
import Paciente from '../models/paciente.model.js';


export const PacienteController = {
  async getAllPacientes(req, res) {
    try {
      const pacientes = await Paciente.findAll();
  
      if (!pacientes || pacientes.length === 0) {
        return res.status(204).json({ mensaje: 'No hay pacientes registrados' }); // 204 No Content
      }
  
      res.status(200).json(pacientes); // 200 OK
      console.log('✅ Pacientes obtenidos:', pacientes);
    } catch (error) {
      console.error('❌ Error en getAllPacientes:', error.message);
  
      if (error.name === 'SequelizeConnectionError') {
        return res.status(503).json({ mensaje: 'Servicio de base de datos no disponible' }); // 503 Service Unavailable
      }
  
      res.status(500).json({ mensaje: 'Error interno al obtener los pacientes' }); // 500 Internal Server Error
    }
  },

  async getPaciente(req, res) {
    try {
      const paciente = await Paciente.findByPk(req.params.id);
      if (!paciente) return res.status(404).json({ message: 'Paciente no encontrado' });
      res.json(paciente);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener el paciente' });
    }
  },

  async createPaciente(req, res) {
    try {
      const nuevo = await Paciente.create(req.body);
      res.status(201).json(nuevo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al crear el paciente' });
      res.status(404).json({ message: 'Error ' });
      
    }
  },

  async updatePaciente(req, res) {
    try {
      const paciente = await Paciente.findByPk(req.params.id);
      if (!paciente) return res.status(404).json({ message: 'Paciente no encontrado' });
      await paciente.update(req.body);
      res.json(paciente);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar el paciente' });
    }
  },

  async deletePaciente(req, res) {
    try {
      const paciente = await Paciente.findByPk(req.params.id);
      if (!paciente) return res.status(404).json({ message: 'Paciente no encontrado' });
      await paciente.destroy();
      res.json({ message: 'Paciente eliminado' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al eliminar el paciente' });
    }
  }
};

export default PacienteController;