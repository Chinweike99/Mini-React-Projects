import express from 'express';
import pg from 'pg';
import fs from  'fs';
import multer from 'multer';
import userRoutes from "./Routes/users.js";
import location from "./Routes/posts.js";


const port = 3200;

const app = express();

app.use("/api/users", userRoutes);
app.use("/api/users", location)

app.get('/', (req, res) => {
    res.send("Welcome")
})

app.listen(port, (req, res)=> {
    console.log(`LISTENING ON PORT http://localhost${port}`)
})