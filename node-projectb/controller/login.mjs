import { db } from "../db.mjs";
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config()
const secretKey = process.env.SECRET

export async function login(req, res){
    try {
        const user = req.body
        const foundUser = await db.oneOrNone(`SELECT * FROM utenti WHERE username='${user.username}'`)
        if (!foundUser) {
            res.status(400).json({msg: 'utente non registrato'})
        } else {
            if (user.password !== foundUser.password) {
                res.status(400).json({msg: 'password non corretta'})
            }

            const token = jwt.sign(foundUser, secretKey, {expiresIn: '1h'})

            console.log(token);

            await db.none(`UPDATE utenti SET token='${token}' WHERE username='${foundUser.username}'`)

            res.status(200).json({msg: 'utente loggato'})
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: 'internal server error'})
    }
}