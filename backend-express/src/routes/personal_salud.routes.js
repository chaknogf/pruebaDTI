import { Router } from 'express';
import {
  getAllPersonal,
  getPersonal,
  createPersonal,
  updatePersonal,
  deletePersonal
} from '../controllers/personal.controller.js';
import verifyToken from '../middlewares/auth.middleware.js';

const router = Router();

/**
 * @swagger
 * /personal:
 *   get:
 *     summary: Obtener todo el personal de salud
 *     tags: [PersonalSalud]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de personal
 */
router.get('/', verifyToken, getAllPersonal);

/**
 * @swagger
 * /personal/{id}:
 *   get:
 *     summary: Obtener personal por ID
 *     tags: [PersonalSalud]
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
 *         description: Datos del personal
 */
router.get('/:id', verifyToken, getPersonal);

/**
 * @swagger
 * /personal:
 *   post:
 *     summary: Crear nuevo personal de salud
 *     tags: [PersonalSalud]
 *     security:
 *       - bearerAuth: []
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
 *               ue:
 *                 type: string
 *     responses:
 *       201:
 *         description: Personal creado
 */
router.post('/', verifyToken, createPersonal);

/**
 * @swagger
 * /personal/{id}:
 *   put:
 *     summary: Actualizar personal de salud
 *     tags: [PersonalSalud]
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
 *         description: Personal actualizado
 */
router.put('/:id', verifyToken, updatePersonal);

/**
 * @swagger
 * /personal/{id}:
 *   delete:
 *     summary: Eliminar personal de salud
 *     tags: [PersonalSalud]
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
 *         description: Personal eliminado
 */
router.delete('/:id', verifyToken, deletePersonal);

export default router;
