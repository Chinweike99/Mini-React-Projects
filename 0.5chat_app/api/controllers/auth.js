import { db } from "../connect.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();

export const register = (req, res) => {
    console.log(req.body);

    if (!req.body.password) {
        return res.status(400).json("Password is required");
    }

    // Check if user exists
    const q = "SELECT * FROM account_user WHERE username = $1";
    db.query(q, [req.body.username], (err, data) => {
        if (err) {
            return res.status(500).json(err);
        }
        if (data.rows.length) { // Check if the user already exists
            console.log("user exists")
            return res.status(409).json("User already exists");
        }

        // Hash the password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        // Insert new user
        const insertQuery = "INSERT INTO account_user (username, email, name, password) VALUES ($1, $2, $3, $4)";
        const values = [req.body.username, req.body.email, req.body.name, hashedPassword];
        db.query(insertQuery, values, (err, data) => {
            if (err) {
                console.log(err);
                return res.status(500).json(err);
            }
            console.log("user created")
            return res.status(200).json("User has been created");
        });
    });
};



// LOGIN PAGE
export const login = (req, res) => {

    const q = "SELECT * FROM account_user WHERE username = $1";

    db.query(q, [req.body.username], (err, result) => {
        if(err){
            return res.status(500).json(err)
        }
        // if(result.rows.length === 0){
        //     return res.status(404).json("User not found")
        // }

        const user = result.rows[0];

        if (!user) {
            console.log("user does not exist")
            return res.status(404).json("User not found");
        }

        const checkPassword = bcrypt.compareSync(req.body.password, user.password);

        if(!checkPassword) return res.status(400).json("Wrong password or Username");
        
        // JWT: for a user to be able to delete a post
        const token = jwt.sign({id: user.id}, process.env.SECRET_KEY);

        const {password, ...others} = user // Ensures hashedPassword isn't returned

        res.cookie("accessToken", token,{
            httpOnly: true
        }).status(200).json(others);

        console.log(result.rows)
    })

}


// LOG OUT
export const logout = (req, res) => {
    res.clearCookie("accessToken",{
        secure: true,
        sameSite: "none" // This allows to remove a session regardless of the port
    }).status(200).json("User logged out")
}