import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import headerReducer from "../reducers/headerReducer";

const store = configureStore({
  reducer: {
    users: userReducer,
    header: headerReducer
  }
})

export default store