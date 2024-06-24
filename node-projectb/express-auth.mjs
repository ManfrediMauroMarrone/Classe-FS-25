import express from 'express'
import dotenv from 'dotenv'
import {signUp} from './controller/signUp.mjs'
import { db } from './db.mjs'
import {login} from './controller/login.mjs'
import { logout } from './controller/logout.mjs'
dotenv.config()

const port = process.env.PORT

const server = express()

server.use(express.json())


server.get('/utenti', async (req, res) => {
    try {
        const utenti = await db.many(`SELECT * FROM utenti`)
        res.status(200).json(utenti)
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: 'internal server error'})
    }
})

server.post('/utenti/new', signUp)

server.post('/utenti/login', login)

server.post('/utenti/logout', logout)

server.listen(port, () => {
    console.log(`Server running on port ${port}`);    
})