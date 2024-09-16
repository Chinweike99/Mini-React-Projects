import { db } from "../connect.js";
import bcrypt from 'bcrypt';

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
            return res.status(200).json("User has been created");
        });
    });
};



// LOGIN PAGE
export const login = () => {

}


// LOG OUT
export const logout = () => {

}