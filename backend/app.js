const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const userRouter = require('./controllers/user')


app.use(express.json())
app.use(cors())


app.use('/api/users', userRouter)

module.exports = app