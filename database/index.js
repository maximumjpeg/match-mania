// import { Pool } from 'pg';

require('dotenv').config();

import { Client } from 'pg'
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  password: 'pizza',
  database: 'todo-pg',
  port: 3000
})

// const credentials = {
//   user: process.env.POSTGRES_USER,
//   database: process.env.DATABASE,
//   password: process.env.POSTGRES_PASSWORD,
//   host: process.env.HOST,
//   port: process.env.PORT
// };

// const pool = new Pool(credentials);

// const client = new Client({
//   user: process.env.POSTGRES_USER,
//   database: process.env.DATABASE,
//   password: process.env.POSTGRES_PASSWORD,
//   host: process.env.HOST,
//   port: process.env.PORT
// })

module.exports = client;

// export const query = (text, params, callback) => {
//   return pool.query(text, pararms, callback)
// }