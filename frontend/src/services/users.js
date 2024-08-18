const baseUrl = "/api/users";
import axios from "axios";

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
  try {
    const token = JSON.parse(localStorage.getItem("authAppUser")).token;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.put(`${baseUrl}/${user.id}`, user, config);

    return response.data;
  } catch (error) {
    console.log("Error updating user data:", error);
    throw error;
  }
};

export default {
  createUser,
  updateUser,
};
