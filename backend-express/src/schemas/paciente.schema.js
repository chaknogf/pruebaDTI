/**
 * @swagger
 * components:
 *   schemas:
 *     Paciente:
 *       type: object
 *       required:
 *         - nombre
 *         - cui
 *         - nacimiento
 *         - direccion
 *         - telefono
 *       properties:
 *         id:
 *           type: integer
 *           description: ID del paciente
 *         nombre:
 *           type: string
 *         cui:
 *           type: integer
 *         nacimiento:
 *           type: string
 *           format: date
 *         direccion:
 *           type: string
 *         telefono:
 *           type: integer
 *       example:
 *         id: 1
 *         nombre: Juan Pérez
 *         cui: 1234567890123
 *         nacimiento: 1990-01-01
 *         direccion: Zona 1, Ciudad
 *         telefono: 55512345
 */