import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export default function verifyToken(req, res, next) {
  try {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ mensaje: 'Encabezado de autorización inválido o ausente' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, SECRET);

    req.user = decoded;
    next();
  } catch (error) {
    console.error('❌ Error al verificar token:', error.message);
    return res.status(403).json({ mensaje: 'Token inválido o expirado' });
  }
}


