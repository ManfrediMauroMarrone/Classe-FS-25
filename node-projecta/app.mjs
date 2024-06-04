import { hello, getData, arr } from "./my-modulo.mjs";
import os from 'os'
import fs from 'fs'
import http, { createServer } from 'http'
const port = 3000

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

const app = createServer((req, res) => {
    console.log(req.url, req.method);
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<h1>Benvenuto sul mio sito</h1>')
        res.statusCode = 200
        res.end()
    } else if(req.url === '/contatti') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<h1>Pagina contatti</h1>')
        res.statusCode = 200
        res.end()
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