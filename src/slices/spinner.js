import { createSlice } from "@reduxjs/toolkit";

// Khởi tạo đối tượng lưu trữ giá trị ban đầu
const initialState = {
  isLoading: false,
};

// Slice
const spinnerSlice = createSlice({
  // name: tiền tố
  name: "globalloading",
  //   Giá trị lưu trữ
  initialState,
  //   Reducerss
  reducer: {
    setSpinner: (state, action) => {
      state.setGlobalLoading = action.payload;
    },
  },
});

export const { setSpinner } = spinnerSlice.actions;

export default spinnerSlice.reducer;
