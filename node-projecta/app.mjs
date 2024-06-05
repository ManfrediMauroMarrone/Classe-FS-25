import { hello, getData, arr } from "./my-modulo.mjs";
import os from 'os'
import fs from 'fs'
import { createServer } from 'http'
import cors from 'cors'
const port = 3000
import pgPromise from "pg-promise";
import querystring from 'querystring'
import { URL } from "url";
const db = pgPromise()("postgres://postgres:admin@localhost:5432/studenti")

//hello('Mario')

//getData()

/* fs.mkdir('assets', (err, data) => {
    if (err) {
        console.log(err);
        return
    }

    console.log('cartella creata');
}) */

/* fs.writeFile('./assets/test.txt', 'adasdada', (err, data) =>{
    if (err) {
        console.log(err);
        return
    }

    console.log('file creato');
}) */

/* fs.appendFile('./assets/test.txt', 'Ciao sono un file txt ', (err, data) =>{
    if (err) {
        console.log(err);
        return
    }

    console.log('file creato');
}) */

/* fs.readFile('./assets/test.txt', 'utf8',  (err, data) =>{
    if (err) {
        console.log(err);
        return
    }

    console.log(data);
}) */

/* if (fs.existsSync('./assets/test.txt')) {
    fs.unlink('./assets/test.txt', (err, data) => {
        if (err) {
            console.log(err);
            return
        }

        console.log('file eliminato');
    })
} else {
    fs.appendFile('./assets/test.txt', 'Ciao sono un file txt ', (err, data) => {
        if (err) {
            console.log(err);
            return
        }

        console.log('file creato');
    })
} */

const app = createServer(async (req, res) => {
    const headers = {
        'Access-Control-Allow-Origin': '*', /* @dev First, read about security */
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Max-Age': 2592000, // 30 days
        /** add other headers as per requirement */
    }

    console.log(req.url, req.method);
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<h1>Benvenuto sul mio sito</h1>')
        res.statusCode = 200
        res.end()
    } else if (req.url === '/contatti') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<h1>Pagina contatti</h1>')
        res.statusCode = 200
        res.end()
    } else if (req.url === '/users') {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()

            if (response.ok) {
                res.writeHead(200, headers)
                res.end(JSON.stringify(data))
            } else {
                res.statusCode = 400
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ msg: 'data not found' }))
            }
        } catch (error) {
            res.statusCode = 500
            res.end(JSON.stringify({ msg: 'internal server error' }))
        }
    } else if (req.url === '/studenti') {
        try {
            const data = await db.manyOrNone('SELECT * FROM studenti') //qui ho fetchato i dati dal database
            console.log(data);
            if (data) {
                res.writeHead(200, headers)
                res.end(JSON.stringify(data))
            } else {
                res.statusCode = 400
                res.end(JSON.stringify({ msg: 'data not found' }))
            }
        } catch (error) {
            console.error(error);
            res.statusCode = 500
            res.end(JSON.stringify({ msg: 'internal server error' }))
        }

    } else if (req.url === '/singlestudent') {
        const id = 1
        const name = 'Pippo'
        console.log(name);
        try {
            //const data = await db.oneOrNone(`SELECT * FROM studenti WHERE id = $1 AND name = $2`, [id, name])
            const data = await db.oneOrNone(`SELECT * FROM studenti WHERE id = ${id} AND name = '${name}'`) //qui ho fetchato i dati dal database
            console.log(data);
            if (data) {
                res.writeHead(200, headers)
                res.end(JSON.stringify(data))
            } else {
                res.statusCode = 400
                res.end(JSON.stringify({ msg: 'data not found' }))
            }
        } catch (error) {
            console.error(error);
            res.statusCode = 500
            res.end(JSON.stringify({ msg: 'internal server error' }))
        }
    } else {
        res.setHeader('Content-Type', 'text/html')
        res.write('<h1>404 page not found</h1>')
        res.statusCode = 404
        res.end()
    }

})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})