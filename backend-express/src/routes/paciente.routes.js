import { Router } from 'express';
import { PacienteController as pt } from '../controllers/paciente.controller.js';
import verifyToken from '../middlewares/auth.js';

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Pacientes
 *   description: Endpoints para gestionar pacientes
 */

/**
 * @swagger
 * /pacientes:
 *   get:
 *     summary: Obtener todos los pacientes
 *     tags: [Pacientes]
 *     security:
 *       - basicAuth: []
 *      
 *     responses:
 *       200:
 *         description: Lista de pacientes
 *       401:
 *         description: No autorizado
 */
router.get('/', verifyToken, pt.getAllPacientes);

/**
 * @swagger
 * /pacientes/{id}:
 *   get:
 *     summary: Obtener un paciente por ID
 *     tags: [Pacientes]
 *     security:
 *       - basicAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del paciente
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Paciente encontrado
 *       404:
 *         description: Paciente no encontrado
 *       401:
 *         description: No autorizado
 */
router.get('/:id', verifyToken, pt.getPaciente);

/**
 * @swagger
 * /pacientes:
 *   post:
 *     summary: Crear un nuevo paciente
 *     tags: [Pacientes]
 *     security:
 *       - basicAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - cui
 *               - nacimiento
 *               - direccion
 *               - telefono
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Juan Pérez
 *               cui:
 *                 type: integer
 *                 example: 1234567890101
 *               nacimiento:
 *                 type: string
 *                 format: date
 *                 example: 1990-01-01
 *               direccion:
 *                 type: string
 *                 example: Calle 123, Ciudad
 *               telefono:
 *                 type: integer
 *                 example: 555123456
 *     responses:
 *       201:
 *         description: Paciente creado
 *       400:
 *         description: Campos inválidos o faltantes
 *       401:
 *         description: No autorizado
 */
router.post('/', verifyToken, pt.createPaciente);

/**
 * @swagger
 * /pacientes/{id}:
 *   put:
 *     summary: Actualizar un paciente existente
 *     tags: [Pacientes]
 *     security:
 *       - basicAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del paciente
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               cui:
 *                 type: integer
 *               nacimiento:
 *                 type: string
 *                 format: date
 *               direccion:
 *                 type: string
 *               telefono:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Paciente actualizado
 *       400:
 *         description: Campos inválidos
 *       401:
 *         description: No autorizado
 *       404:
 *         description: Paciente no encontrado
 */
router.put('/:id', verifyToken, pt.updatePaciente);

/**
 * @swagger
 * /pacientes/{id}:
 *   delete:
 *     summary: Eliminar un paciente
 *     tags: [Pacientes]
 *     security:
 *       - basicAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del paciente a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Paciente eliminado
 *       401:
 *         description: No autorizado
 *       404:
 *         description: Paciente no encontrado
 */
router.delete('/:id', verifyToken, pt.deletePaciente);

export default router;