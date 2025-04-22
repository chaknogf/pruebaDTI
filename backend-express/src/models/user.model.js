import { pool } from '../config/db.js';

export const findUserByUsername = async (username) => {
  const [rows] = await pool.query('SELECT * FROM usuarios WHERE username = ?', [username]);
  return rows[0];
};

export const createUser = async (username, hashedPassword) => {
  const [result] = await pool.query('INSERT INTO usuarios (username, password) VALUES (?, ?)', [username, hashedPassword]);
  return result.insertId;
};