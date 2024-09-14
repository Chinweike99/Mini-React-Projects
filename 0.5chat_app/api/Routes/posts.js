import express from 'express';

const location = express.Router();

location.get('/location', (req, res) => {
    res.send("This is your new location")
})

export  default location;