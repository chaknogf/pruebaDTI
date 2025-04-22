// src/config/swagger.js
import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Sistema de Vacunas – API',
    version: '1.0.0',
    description: 'API para gestionar pacientes, vacunas y personal de salud.',
    contact: {
      name: 'Soporte Técnico',
      email: 'soporte@example.com'
    }
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Servidor de desarrollo'
    }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  },
  security: [
    {
      bearerAuth: []       // ← coherente con el esquema definido
    }
  ]
};

const options = {
  definition: swaggerDefinition,
  apis: [
    './src/routes/**/*.js',
    './src/controllers/**/*.js',
    './src/models/**/*.js',
    './src/schemas/**/*.js'
  ]
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;