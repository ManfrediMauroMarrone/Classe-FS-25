const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const pgp = require('pg-promise')()
const db = pgp("postgres://postgres:admin@localhost:5432/utentifs25")

app.use(express.json())

app.get('/', async (req, res) => {
    try {
        const users = await db.manyOrNone(`SELECT * FROM utenti`)

        if (users.length > 0) {
            res.status(200).json(users)
        } else {
            res.status(400).json({ msg: 'no data found' })
        }
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ msg: 'bad request' })
    }
})

app.get('/utenti/:id', async (req, res) => {
    try {
        const id = req.params.id

        const utente = await db.oneOrNone(`SELECT * FROM utenti WHERE id=${id}`)

        if (utente) {
            res.status(200).json(utente)
        } else {
            res.status(400).json({ msg: 'no user found' })
        }
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ msg: 'bad request' })
    }
})

app.post('/utenti/new', async (req, res) => {
    try {
        const newUser = req.body
        const foundUser = await db.oneOrNone(`SELECT * FROM utenti WHERE username='${newUser.username}'`)
        console.log(foundUser);
        if (!foundUser) {
            await db.none(`INSERT INTO utenti (username, password, email) VALUES ('${newUser.username}', '${newUser.password}', '${newUser.email}')`)
            res.status(200).json({ msg: 'new user added' })
        } else {
            res.status(400).json({ msg: 'username already in use' })
        }

    } catch (error) {
        console.error(error.message)
        res.status(500).json({ msg: 'bad request' })
    }
})

app.delete('/utenti/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        const foundUser = await db.oneOrNone(`SELECT * FROM utenti WHERE id=${id}`)
        if (foundUser) {
            await db.none(`DELETE FROM utenti WHERE id=${id}`)
            res.status(200).json({ msg: 'user deleted' })
        } else {
            res.status(400).json({ msg: 'cannot find user' })
        }
        
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ msg: 'bad request' })
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})