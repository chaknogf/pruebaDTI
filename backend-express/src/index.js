import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './docs/swagger.js'; // Asegúrate de usar `.js` si usas módulos ES

// Rutas de tu aplicación
import pacienteRoutes from './routes/paciente.routes.js';
// Puedes importar más rutas aquí

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Rutas API
app.use('/api/pacientes', pacienteRoutes);
// Agrega aquí más rutas si es necesario



// Documentación Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Arranque del servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en: http://localhost:${PORT}`);
  console.log(`📚 Documentación disponible en: http://localhost:${PORT}/docs`);
});