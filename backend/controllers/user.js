const userRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')

userRouter.get('/', async (req, res) => {
  res.send('Hello there')
  res.end()
})

userRouter.post('/', async (req, res) => {
  const {username, name, age, gender, password} = req.body

  const saltRaunds = 10 

  const passwordHash = await bcrypt.hash(password, saltRaunds)

  const user = new User({
    username,
    name,
    age,
    gender,
    passwordHash
  })

  const savedUser = await user.save()

  res.status(201).json(savedUser)

})

module.exports = userRouter