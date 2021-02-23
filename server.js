const express = require('express');
const app = express()
// const cors = require('cors')
const bcrypt = require('bcrypt')

// midleware for
// app.use(cors());
app.use(express.json())


// fake data (co0me back and add database here soon)
const users = []

// authentication
app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', async (req, res)=> {
    try {
        const salt = await bcrypt.genSalt()
        const hashedPassword =  await bcrypt.hash(req.body.password, salt)
        console.log("salt", salt)
        console.log("hashedPassword", hashedPassword)
        const user = { name: req.body.name, password: hashedPassword}
        users.push(user)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }

})



app.listen(5000, () => {
    console.log("server started on port 5000")
})