require('dotenv').config()
const express = require('express');
const app = express()
const cors = require('cors')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// MIDDLEWARE
app.use(cors());
app.use(express.json())

// ROUTES

// register and login routes
app.use("/auth", require("./routes/jwtAuth"))


app.listen(5000, () => {
        console.log("Server has been started on port 5000")
})