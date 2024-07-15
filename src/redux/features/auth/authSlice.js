import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,

}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin(state, action) {
      state.accessToken = action.payload.accessToken
    },
    userLogout(state) {
      state.accessToken = null
    },
  }
})
export const { userLogin, userLogout } = authSlice.actions
export default authSlice.reducer