const baseUrl = "api/login";
import axios from "axios";

const login = async (credentials) => {
  try {
    const response = await axios.post(baseUrl, credentials);
    return response.data;
  } catch (error) {
    console.log('error during login', error)
    throw error
  }
};

export default login;
