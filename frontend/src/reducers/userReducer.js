import { createSlice } from "@reduxjs/toolkit";
import userService from '../services/users'

const userSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    createUser(state, action) {
      state.push(action.payload)
    },
    setUsers(state, action) {
      return action.payload
    }
  }
})

export const { setUsers, createUser } = userSlice.actions

export const initializeUsers = () => {
  return async dispatch => {
    const users = await userService.getAll()
  
    dispatch(setUsers(users))
  }
}

export const addUser = (user) => {
  return async dispatch => {
    const newUser = await userService.createUser(user)
    dispatch(createUser(newUser))
  }
}

export default userSlice.reducer