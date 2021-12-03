import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  online: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    statusAction: (state) => {
      state.online = true;
    },
    // artistalubums: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const { statusAction } = userSlice.actions;

export const statusSelector = (state) => state.user.online;

export default userSlice.reducer; //when used the name can be given from us
