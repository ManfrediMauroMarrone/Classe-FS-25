import { db } from "../db.mjs"

export async function logout(req, res) {
    try {
        const user = req.autheticatedUser

        console.log('dentro logout', user);

        const loggedUser = await db.oneOrNone(`SELECT * FROM utenti WHERE username='${user.username}'`)

        console.log('dentro logout', loggedUser);

        if (user.username) {
            await db.none(`UPDATE utenti SET token=null WHERE username='${user.username}'`)

            res.status(200).json({ msg: 'utente sloggato' })
        } else {
            res.status(400).json({ msg: 'no data found' })
        }


    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'internal server error' })
    }
}