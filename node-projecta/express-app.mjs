import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT || 3000

const users = [
    {
        id: 1,
        username: 'user1',
        password: 'password123'
    },
    {
        id: 2,
        username: 'user2',
        password: 'mypassword'
    },
    {
        id: 3,
        username: 'user3',
        password: 'securepassword'
    },
    {
        id: 4,
        username: 'user4',
        password: 'password456'
    },
    {
        id: 5,
        username: 'user5',
        password: 'anotherpassword'
    }
];

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next()
})

app.get('/homepage', (req, res) => {
    res.status(200).json({ msg: 'sei nella homepage' })
})

app.get('/users', (req, res) => {
    res.status(200).json(users)
})

app.post('/users/new', (req, res) => {
    const newUser = req.body
    console.log(newUser);
    console.log(Object.keys(newUser));
    if (Object.keys(newUser).length > 0) {
        users.push(newUser)
        res.status(200).json({msg: 'utente aggiunto'})
    } else {
        res.status(400).json({msg: 'bad request'})
    }

})

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id)
    const singleUser = users.find(element => element.id === id)
    if (singleUser) {
        res.status(200).json(singleUser)
    } else {
        res.status(400).json({msg: 'no user found'})
    }
    
})

app.use((req, res, next) => {
    res.status(404).json({ msg: '404 page not found' })
})

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})