import { db } from "../db.mjs";

export async function logout(req, res){
    try {
        const user = req.body
        const foundUser = await db.oneOrNone(`SELECT * FROM utenti WHERE username='${user.username}'`)
        if (foundUser) {
            await db.none(`UPDATE utenti SET token=null WHERE username='${foundUser.username}'`)
            res.status(200).json({msg: 'utene sloggato'})
        } else {
            res.status(400).json({msg: 'utene non trovato'})
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: 'internal server error'})
    }
}