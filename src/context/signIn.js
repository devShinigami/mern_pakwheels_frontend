import { createSlice } from "@reduxjs/toolkit";

const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    signIn: false,
  },
  reducers: {
    setSignIn: (state, action) => {
      console.log(state);
      state.signIn = action.payload;
    },
  },
});
export const { setSignIn } = signInSlice.actions;
export default signInSlice.reducer;
