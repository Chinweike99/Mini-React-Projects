import express from 'express';
import pg from 'pg';
import fs from  'fs';
import multer from 'multer';
import userRoutes from "./Routes/users.js";
import postRoutes from "./Routes/posts.js";
import commentsRoutes from "./Routes/comments.js";
import authRoutes from "./Routes/auth.js";
import likesRoutes from "./Routes/likes.js";


const port = 3200;

const app = express();

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentsRoutes);
app.use("/api/likes", likesRoutes);
app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {
    res.send("Welcome")
})

app.listen(port, (req, res)=> {
    console.log(`LISTENING ON PORT http://localhost${port}`)
})