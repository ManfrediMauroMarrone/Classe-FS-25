import express from "express"
import dotenv from "dotenv"
import { users } from "./users.mjs"
import cors from "cors"

const app = express()
dotenv.config()
const port = process.env.port


app.use(cors())
app.use(express.json())
app.get("/users", (req, res) => {
    res.status(200).json(users)
})

app.post("/users/new", (req, res) => {

    const data = req.body
    users.push(data)

    res.status(200).json({
        msg : "Utente aggiunto"
    })
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
} )