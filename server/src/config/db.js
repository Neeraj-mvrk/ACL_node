const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();
const pool = new Pool({
  user: process.env.DBUSER,
  host: process.env.URI,
  database: process.env.DBNAME,
  password: process.env.DBPASS,
  port: 5432,
})

async function query(query, params) {
  const client = await pool.connect();
  let result = await client.query(query);
  client.release();
  return result.rows
 
}

module.exports = {
query
}