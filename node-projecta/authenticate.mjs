import { db } from "./db.mjs";
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config()
const secretKey = process.env.SECRET

export async function authenticate(req, res, next){
    try {
        const user = req.body

        const loggedUser = await db.oneOrNone(`SELECT * FROM utenti WHERE username='${user.username}'`)

        console.log('dentro auth', loggedUser);

        if (loggedUser) {
            if (!loggedUser.token) {
                res.status(400).json({msg: 'unauthorized'})
            } else {
                jwt.verify(loggedUser.token, secretKey, (err, decoded) => {
                    if (err) {
                        res.status(403).send('Invalid token');
                        return
                    }

                    req.autheticatedUser = decoded

                    console.log('user', req.user);
                    next()
                })
            }
        } else {
            res.status(400).json({msg: 'user not found'})
        }
    } catch (error) {
        
    }
}