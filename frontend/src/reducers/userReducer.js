import { createSlice } from "@reduxjs/toolkit";
import userService from "../services/users";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    createUser(state, action) {
      state.push(action.payload);
    },
    setUser(state, action) {
      return action.payload;
    },
    clearUser(state, action) {
      return null;
    },
  },
});

export const { setUser, createUser, clearUser } = userSlice.actions;

export const addUser = (user) => {
  return async (dispatch) => {
    const newUser = await userService.createUser(user);
    dispatch(createUser(newUser));
  };
};

export default userSlice.reducer;
