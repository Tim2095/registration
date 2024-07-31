const baseUrl = '/api/users'
import axios from "axios"

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default {
  getAll
}