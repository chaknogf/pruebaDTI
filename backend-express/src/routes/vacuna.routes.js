import { Router } from 'express';
import {
  getAllVacunas,
  getVacuna,
  createVacuna,
  updateVacuna,
  deleteVacuna
} from '../controllers/vacuna.controller.js';
import verifyToken from '../middlewares/auth.middleware.js';

const router = Router();

/**
 * @swagger
 * /vacunas:
 *   get:
 *     summary: Obtener todas las vacunas
 *     tags: [Vacunas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de vacunas
 */
router.get('/', verifyToken, getAllVacunas);

/**
 * @swagger
 * /vacunas/{id}:
 *   get:
 *     summary: Obtener vacuna por ID
 *     tags: [Vacunas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Datos de la vacuna
 */
router.get('/:id', verifyToken, getVacuna);

/**
 * @swagger
 * /vacunas:
 *   post:
 *     summary: Crear una nueva vacuna
 *     tags: [Vacunas]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipo_vacuna:
 *                 type: integer
 *               fecha_aplicacion:
 *                 type: string
 *                 format: date
 *               lote:
 *                 type: string
 *               persona_administra:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Vacuna creada
 */
router.post('/', verifyToken, createVacuna);

/**
 * @swagger
 * /vacunas/{id}:
 *   put:
 *     summary: Actualizar datos de una vacuna
 *     tags: [Vacunas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Vacuna actualizada
 */
router.put('/:id', verifyToken, updateVacuna);

/**
 * @swagger
 * /vacunas/{id}:
 *   delete:
 *     summary: Eliminar una vacuna
 *     tags: [Vacunas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Vacuna eliminada
 */
router.delete('/:id', verifyToken, deleteVacuna);

export default router;