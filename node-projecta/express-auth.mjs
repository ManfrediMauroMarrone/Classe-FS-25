import express from 'express'
import dotenv from 'dotenv'
import { db } from './db.mjs'
import { signUp } from './controller/signUp.mjs'
import { login } from './controller/login.mjs'
import { logout } from './controller/logout.mjs'
import { authenticate } from './authenticate.mjs'
dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/utenti', async (req, res) => {
    try {
        const utenti = await db.many(`SELECT * FROM utenti`)
        res.status(200).json(utenti)
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: 'internal server error'})
    }
})

app.get('/prodotti', authenticate, (req, res) => {
    res.status(200).json({msg: 'benvenuto nella pagina prodotti'})
})

app.post('/utenti/new', signUp)

app.post('/utenti/login', login)

app.post('/utenti/logout', authenticate, logout)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})