const baseUrl = "/api/users";
import axios from "axios";

// const getAll = async () => {
//   try {
//     const response = await axios.get(baseUrl);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     throw error;
//   }
// };

const createUser = async (user) => {
  try {
    const response = await axios.post(baseUrl, user);
    return response.data;
  } catch (error) {
    console.log("Error posting new user:", error);
    throw error;
  }
};

const updateUser = async (user) => {
  const response = await axios.put(`${baseUrl}/${user.id}`, user)
  console.log(response.data)
  return response.data
}


export default {
  // getAll,
  createUser,
  updateUser
};
