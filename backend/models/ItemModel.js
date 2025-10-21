const db = require('../config/db');

const Item = {
  getAllWithUser: async () => {
    const [rows] = await db.query(`
      SELECT i.*, u.name AS submittedByName, u.email AS submittedByEmail
      FROM items i
      JOIN users u ON i.submittedBy = u.id
    `);
    return rows;
  },

  getByIdWithUser: async (id) => {
    const [rows] = await db.query(`
      SELECT i.*, u.name AS submittedByName, u.email AS submittedByEmail
      FROM items i
      JOIN users u ON i.submittedBy = u.id
      WHERE i.id = ?
    `, [id]);
    return rows[0];
  },

  getByUser: async (userId) => {
    const [rows] = await db.query('SELECT * FROM items WHERE submittedBy = ?', [userId]);
    return rows;
  },

  create: async ({ title, description, category, type, submittedBy, imageUrl }) => {
    const [result] = await db.query(
      'INSERT INTO items (title, description, category, type, imageUrl, status, submittedBy) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [title, description, category, type, imageUrl || '', 'Pending', submittedBy]
    );
    return result.insertId;
  },

  updateStatus: async (id, status) => {
    const [result] = await db.query('UPDATE items SET status = ? WHERE id = ?', [status, id]);
    return result.affectedRows;
  },
};

module.exports = Item;
