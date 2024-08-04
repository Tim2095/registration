import { createSlice } from "@reduxjs/toolkit";

const heaaderSlice = createSlice({
  name: 'header',
  initialState: '',
  reducers: {
    setHeader(state, action) {
      return action.payload
    }
  } 
})


export const { setHeader } = heaaderSlice.actions

export default heaaderSlice.reducer