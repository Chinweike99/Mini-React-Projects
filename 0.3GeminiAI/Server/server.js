const express = require("express")


const app = express();

const PORT = 4400;

app.get("/", (req, res) => {
    res.send("Hello")
})

app.listen(PORT, ()=>{
    console.log(`LISTENING ON http://localhost:${PORT}`)
})