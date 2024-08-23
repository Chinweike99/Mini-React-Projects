const express = require("express")
const pg = require("pg");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");


const app = express();
const PORT = process.env.PORT ?? 4400;
app.use(express.json())


const db = new pg.Client({
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.DBPORT,
    user: process.env.USER_NAME
})

db.connect();


app.get("/", (req, res) => {
    res.send("Hello")
})

app.post("/login", async(req, res) => {
    const {username, email, password} = req.body;
    try {
        const response = await db.query("INSERT INTO gemini(username, email, password) VALUES($1, $2, $3)",[username, email, password]);
        res.send(response);
    } catch (error) {
        console.error
    }
})

app.listen(PORT, ()=>{
    console.log(`LISTENING ON http://localhost:${PORT}`)
});