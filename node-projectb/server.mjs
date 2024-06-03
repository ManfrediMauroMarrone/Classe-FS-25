import os from 'os'
import fs from 'fs'
import http from 'http'
const port = 3000

/* fs.mkdir('assets', (err, data) => {
    if (err) {
        console.log(err);
        return
    }

    console.log('cartella creata');
}) */

/* fs.writeFile('./assets/test.txt','', (err, data) => {
    if (err) {
        console.log(err);
        return
    }

    console.log('file creato');
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

        console.log('file scritto');
    })
} */

/* fs.readFile('./assets/test.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return
    }

    console.log(data);
}) */


const server = http.createServer((req, res) => {
    console.log(req.method, req.url);
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html')
        fs.readFile('./assets/test.txt', 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                return
            }
            res.write(`<h1>${data}</h1>`)
            res.statusCode = 200
            res.end()
        })
    } else if (req.url === '/contatti') {
        res.setHeader('Content-Type', 'text/html')
        res.write(`<h1>Pagina contatti</h1>`)
        res.statusCode = 200
        res.end()

    } else {
        res.setHeader('Content-Type', 'text/html')
        res.write(`<h1>404 page not found</h1>`)
        res.statusCode = 404
        res.end()
    }

})

server.listen(port, () => {
    console.log(`server running on port ${port}`);
})



