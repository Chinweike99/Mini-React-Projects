import pg from 'pg';

export const db = new pg.Client ({
    host: process.env.HOST,
    user: process.env.USER_NAME,
    password: process.env.USER_PASSWORD,
    database: process.env.DATABASE
})

// db.connect();
