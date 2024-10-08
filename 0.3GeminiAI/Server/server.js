require("dotenv").config();
const express = require("express")
const pg = require("pg");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT ?? 4400;
app.use(cors())
app.use(express.json())


const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

db.connect();


// app.get("/signup/:userEmail", async (req, res) => { 
//     const { userEmail } = req.params
    
//     try {
//         const response = await db.query("SELECT * FROM gemini_ai WHERE email = $1", [userEmail]);
//         res.json(response.rows)
//     } catch (error) {
//         console.error(error)
//     }
// })

// SIGN UP
app.post("/signup", async(req, res) => {
    const {username, email, password} = req.body;
    const salt = bcrypt.genSaltSync(15);
    const hashedPassword = bcrypt.hashSync(password, salt)
    try {

        // Step 1: Check if the email already exists
        const checkUserQuery = await db.query("SELECT * FROM gemini_Ai WHERE email = $1", [email]);

        if (checkUserQuery.rows.length > 0) {
            // Step 2: Email already exists, send error response
            return res.status(400).json({ detail: "User Exists" });
        }


        const response = await db.query("INSERT INTO gemini_Ai (username, email, password) VALUES($1, $2, $3)",[username, email, hashedPassword]);

        const token = jwt.sign({email}, 'secret', {expiresIn: '30min'});
        res.json({username, email, token})
        // res.json(response.rows)

    } catch (error) {
        console.error(error)
    }
})


// LOGIN
app.post("/login", async(req, res) => {
    const {username, email, password} = req.body;
    try {
        const user = await db.query("SELECT * FROM gemini_Ai WHERE email = $1",[email]);
        if(!user.rows.length) return res.json({detail: "User not found, pls sign up"});
        const success = await bcrypt.compare(password, user.rows[0].password)
        const token = jwt.sign({email}, 'secret', {expiresIn: "30min"})

        if(success){
            res.json({'email' : user.rows[0].email, token});
        }else{
            res.json({detail: "Email or password is Incorrrect"})
        }
    } catch (error) {
        console.error(error.message)
    }
})

app.listen(PORT, ()=>{
    console.log(`LISTENING ON http://localhost:${PORT}`)
});