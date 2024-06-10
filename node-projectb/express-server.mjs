import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

let users = [
    {
      id: 1,
      username: 'user1',
      password: 'password1'
    },
    {
      id: 2,
      username: 'user2',
      password: 'password2'
    },
    {
      id: 3,
      username: 'user3',
      password: 'password3'
    },
    {
      id: 4,
      username: 'user4',
      password: 'password4'
    },
    {
      id: 5,
      username: 'user5',
      password: 'password5'
    }
  ];

const port = process.env.PORT

const server = express()

server.use(express.json())

server.get('/homepage', (req, res) => {
    res.status(200).json({msg: 'benvenuto nella homepage'})
})

server.get('/contatti', (req, res) => {
    res.status(200).send('pagina contatti')
})

server.post('/new', (req, res) => {
    const userData = req.body
    console.log(Object.keys(userData));
    if (Object.keys(userData).length > 0) {
        res.status(200).json(userData)
    } else {
        res.status(400).json({msg: 'no data'})
    }
})

server.get('/products', async (req, res) => {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        if (response.ok) {
            res.status(200).json(data)
        } else {
            res.status(400).json({msg: 'bad request'})
        }
    } catch (error) {
        res.status(500).json({msg: 'internal server error'})
    }
})

server.get('/users', (req, res) => {
    res.status(200).json(users)
})

server.get('/users/:id', (req, res) => {
    const id = Number(req.params.id)
    const singleUser = users.find(element => element.id === id)
    console.log(id, singleUser);
    if (singleUser) {
        res.status(200).json(singleUser)
    } else {
        res.status(400).json({msg: 'user not found'})
    }
})

server.post('/users/new', (req, res) => {
    const newUser = req.body
    if (Object.keys(newUser).length > 0) {
        users.push(newUser)
        res.status(200).json(users)
    } else {
        res.status(400).json({msg: 'bad request'})
    }
})

server.patch('/users/update/:id', (req, res) => {
    const id = Number(req.params.id)
    const username = req.body.username
    if (username) {
        const newUsers = users.map(element => {
            if (element.id === id) {
                return {...element, username: username}
            } else {
                return element
            }
        })
        res.status(200).json(newUsers)
    } else {
        res.status(400).json({msg: 'bad request'})
    }
})

server.delete('/users/delete/:id', (req, res) => {
    const id = Number(req.params.id)
    const filtered = users.filter(element => element.id !== id)
    users = filtered
    res.status(200).json(users)
    
})

server.use((req, res) => {
    res.status(404).send('404 page not found')
})

server.listen(port, () => {
    console.log(`server running on port ${port}`);
})