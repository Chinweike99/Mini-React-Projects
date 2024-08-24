require("dotenv").config();
const express = require("express")
const pg = require("pg");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");


const app = express();
const PORT = process.env.PORT ?? 4900;
app.use(express.json())


const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

db.connect();


app.get("/home", async (req, res) => {
    try {
        const response = await db.query("SELECT * FROM gemini_ai");
    res.json(response.rows)
    } catch (error) {
        console.error(error)
    }
})


app.listen(PORT, () => {
    console.log(`LISTENING ON PORT ${PORT}`)
})