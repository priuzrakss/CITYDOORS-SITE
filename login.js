const pool = require('./db');

async function getUserRole(login, password) {
  console.log("Обращение к базе");
  if(login && password !== '') {
    try {
      const result = await pool.query(
        'SELECT role FROM users WHERE username = $1 AND password = $2',
        [login, password]
      );
      if(result.rows.length > 0) {
        return result.rows[0].role; 
      } else {
        return null;
      }
    } catch (err) {
      console.error('Database query error:', err);
      throw err;
    }
  }
}

module.exports = getUserRole;
