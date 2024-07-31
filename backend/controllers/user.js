const userRouter = require('express').Router()

userRouter.get('/', (req, res) => {
  res.send('Hello there')
  res.end()
})

module.exports = userRouter