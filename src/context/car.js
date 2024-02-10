import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "car",
  initialState: {},
  reducers: {
    setCarInfo: (state, action) => {
      console.log(state);
      state.car = action.payload;
    },
  },
});
export const { setCarInfo } = carSlice.actions;
export default carSlice.reducer;
