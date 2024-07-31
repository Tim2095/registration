require('dotenv').config()

const PORT = process.env.PORT
const MONGODB_URL = process.env.MONGODB_URL
const DB_PASSWORD = process.env.DB_PASSWORD


module.exports = {
  PORT,
  MONGODB_URL,
  DB_PASSWORD
}