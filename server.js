require('dotenv').config()
const express = require('express');
const app = express()
// const cors = require('cors')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// midleware for
// app.use(cors());
app.use(express.json())



// fake data (co0me back and add database here soon)
const users = []

app.post('/login', (req, res) => {
    const username = req.body.username
    user = {name: username}

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken: accessToken})
})

// authentication
app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', async (req, res)=> {
    try {
        const salt = await bcrypt.genSalt()
        const hashedPassword =  await bcrypt.hash(req.body.password, salt)
        const user = { name: req.body.name, password: hashedPassword}
        users.push(user)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
})

app.post('users/login', async (req, res) => {
    const user = users.find(user => user.name = req.body.name)
    if (user === null) {
        return res.status(400).send('Cannot find user')
        }
        try {
            if(await bcrypt.compare(req.body.password, user.password)) {
                res.send('Success')
            } else {
                res.send('Not Allowed')
            }
        } catch {
            res.status(500).send()
        }
})

    app.listen(5000, () => {
        console.log("Server has been started on port 5000")
     })