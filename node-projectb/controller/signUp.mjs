import { db } from "../db.mjs"

export async function signUp(req, res){
    try {
        const newUser = req.body
        const foundUser = await db.oneOrNone(`SELECT * FROM utenti WHERE username='${newUser.username}'`)
        if (!foundUser) {
            await db.none(`INSERT INTO utenti (username, password, email) VALUES ('${newUser.username}', '${newUser.password}', '${newUser.email}')`)
            res.status(201).json({msg: 'utente registrato con successo'})
        } else {
            res.status(400).json({msg: 'username non disponibile'})
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: 'internal server error'})
    }
}