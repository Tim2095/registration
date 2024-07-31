const baseUrl = "/api/users";
import axios from "axios";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createUser = async (user) => {
  const response = await axios.post(baseUrl, user);
  return response.data;
};

export default {
  getAll,
  createUser,
};
