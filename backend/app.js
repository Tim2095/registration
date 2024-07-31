const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const userRouter = require('./controllers/user')
const config = require('./utils/config')
mongoose.set("strictQuery", false);

console.log('connecting to ', config.MONGODB_URL)

const DB_URL = config.MONGODB_URL.replace('PASSWORD', encodeURIComponent(config.DB_PASSWORD))

mongoose.connect(DB_URL).then(() => console.log(`connected to Mongo DB`)).catch(error => {
  console.log(`Failed to connect to database ${error}`)
})

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    console.log("connected to Mongo DB");
  })
  .catch((error) => {
    console.log("failed to connect to database ", error);
  });

console.log(config.MONGODB_URL)

app.use(express.json())
app.use(cors())


app.use('/api/users', userRouter)

module.exports = app