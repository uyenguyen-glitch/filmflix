import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authModalOpen: false,
};

export const authModalSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthModalOpen: (state, action) => {
      state.authModalOpen = action.payload;
    },
  },
});

export const { setAuthModalOpen } = auth.actions;

export default authModalSlice.reducer;
