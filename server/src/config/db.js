const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'one',
  password: 'postgres',
  port: 5432,
})

async function query(query, params) {
  const client = await pool.connect();
  let result = await client.query(query);
  client.release();
  return result.rows[0]
 
}

module.exports = {
query
}