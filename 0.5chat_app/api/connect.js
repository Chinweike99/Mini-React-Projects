import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();


export const db = new pg.Client ({
    host: process.env.HOST,
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    database: process.env.DATABASE
})

db.connect();
