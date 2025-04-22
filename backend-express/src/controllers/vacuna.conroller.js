import Vacuna from '../models/vacuna.model.js';

export const getAllVacunas = async (req, res) => {
  const vacunas = await Vacuna.findAll();
  res.json(vacunas);
};

export const createVacuna = async (req, res) => {
  const vacuna = await Vacuna.create(req.body);
  res.status(201).json(vacuna);
};

// controllers/personal_salud.controller.js
import PersonalSalud from '../models/personal_salud.model.js';

export const getAllPersonal = async (req, res) => {
  const personal = await PersonalSalud.findAll();
  res.json(personal);
};

export const createPersonal = async (req, res) => {
  const nuevo = await PersonalSalud.create(req.body);
  res.status(201).json(nuevo);
};
