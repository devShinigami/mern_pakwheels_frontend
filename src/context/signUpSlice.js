import { createSlice } from "@reduxjs/toolkit";

const signUpSlice = createSlice({
  name: "signUp",
  initialState: {
    signUp: false,
  },
  reducers: {
    setSignUp: (state, action) => {
      console.log(state);
      state.signUp = action.payload;
    },
  },
});
export const { setSignUp } = signUpSlice.actions;
export default signUpSlice.reducer;
