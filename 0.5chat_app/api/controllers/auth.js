import { db } from "../connect.js"
import bcrypt from 'bcrypt'


export const register = (rew, res) =>{
    // Check if users exists
    const q = "SELECT FROM account_user WHERE username = ?" // use ? instead of req.body.username, because it provides extra layer of security..
    db.query(q, [req.body.username], (err, data)=> {
        if(err){
            return res.status(500).json(err)
        }
        if(data.length){
            return res.status(409).json("User already exists")
        }
    });

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt)

}


// LOGIN PAGE
export const login = () => {

}


// LOG OUT
export const logout = () => {

}