const express = require('express');
const pg = require('pg');
const fs = require ('fs');
const multer =  require('multer');

const port = 3200;

const app = express();



app.get('/', (req, res) => {
    res.send("Welcome")
})

app.listen(port, (req, res)=> {
    console.log(`LISTENING ON PORT http://localhost${port}`)
})