require("dotenv").config();
const express = require("express")
const pg = require("pg");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");


const app = express();
const PORT = process.env.PORT ?? 4400;
app.use(express.json())


const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

db.connect();


app.get("/signup", async (req, res) => {
    const userEmail = "wike@gmail.com"
    
    try {
        const response = await db.query("SELECT * FROM gemini_ai WHERE email = $1", [userEmail]);
        res.json(response.rows)
    } catch (error) {
        console.error(error)
    }
})

// SIGN UP
app.post("/signup", async(req, res) => {
    const {username, email, password} = req.body;
    const salt = bcrypt.genSaltSync(15);
    const hashedPassword = bcrypt.hashSync(password, salt)
    try {
        const response = await db.query("INSERT INTO gemini_ai (username, email, password) VALUES($1, $2, $3)",[username, email, hashedPassword]);
        const token = jwt.sign({email}, 'secret', {expiresIn: '30min'});
        res.json({username, email, token})
        res.json(response.rows)

    } catch (error) {
        console.error(error.message)
    }
})


// LOGIN
app.post("/login", async(req, res) => {
    const {username, email, password} = req.body;
    try {
        const response = await db.query("INSERT INTO gemini(username, email, password) VALUES($1, $2, $3)",[username, email, password]);
        res.send(response);
    } catch (error) {
        console.error(error.message)
    }
})

app.listen(PORT, ()=>{
    console.log(`LISTENING ON http://localhost:${PORT}`)
});