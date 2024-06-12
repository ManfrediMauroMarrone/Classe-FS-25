import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
const port = process.env.PORT || 3000

let users = [
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

app.use(cors())

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
    if (newUser.username.trim() && newUser.password.trim()) {
        users.push(newUser)
        res.status(200).json({ msg: 'utente aggiunto' })
    } else {
        res.status(400).json({ msg: 'missing data' })
    }

})

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id)
    const singleUser = users.find(element => element.id === id)
    if (singleUser) {
        res.status(200).json(singleUser)
    } else {
        res.status(400).json({ msg: 'no user found' })
    }

})

app.patch('/users/update/:id', (req, res) => {
    const id = Number(req.params.id)
    const newPass = req.body.password
    const user = users.find(element => element.id === id)
    if (newPass && user) {
        const updated = users.map(element => {
            if (element.id === id) {
                return { ...element, password: newPass }
            } else {
                return element
            }
        })

        users = updated

        res.status(201).json({ msg: `utente con id ${id} modificato` })
    } else {
        res.status(400).json({ msg: 'missing data' })
    }

})

app.delete('/users/delete/:id', (req, res) => {
    const id = Number(req.params.id)
    const user = users.find(element => element.id === id)
    if (user) {
        const filtered = users.filter(element => {
            return element.id !== id
        })

        users = filtered

        res.status(200).json({ msg: `utente con id ${id} eliminato` })
    } else {
        res.status(400).json({ msg: 'user not found' })
    }

})

app.use((req, res, next) => {
    res.status(404).json({ msg: '404 page not found' })
})

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})