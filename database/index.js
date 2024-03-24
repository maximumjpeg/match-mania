import { Pool } from 'pg';
import 'dotenv/config';

const credentials = {
  user: process.env.POSTGRES_USER,
  database: process.env.DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT
};
const pool = new Pool(credentials)

export const query = (text, params, callback) => {
  return pool.query(text, pararms, callback)
}