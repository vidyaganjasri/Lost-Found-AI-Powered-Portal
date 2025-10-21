const db = require('../config/db');

const User = {
  getByEmail: async (email) => {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
  },

  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  },

  create: async ({ name, email, password, role }) => {
    const [result] = await db.query(
      'INSERT INTO users (name, email, password, role, verified) VALUES (?, ?, ?, ?, ?)',
      [name, email, password, role || 'student', false]
    );
    return result.insertId;
  },

  verify: async (id) => {
    await db.query('UPDATE users SET verified = true WHERE id = ?', [id]);
  },
};

module.exports = User;
