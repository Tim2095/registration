import { createSlice } from "@reduxjs/toolkit";
import userService from '../services/users'

const userSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    createUser(state, action) {
      state.push(action.payload)
    },
    setUser(state, action) {
      return action.payload
    }
  }
})

export const { setUser, createUser } = userSlice.actions


export const addUser = (user) => {
  return async dispatch => {
    const newUser = await userService.createUser(user)
    dispatch(createUser(newUser))
  }
}

export default userSlice.reducer