import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { genresAPI } from "../services/modules/genreAPI";

const initialState = {
  genres: [],
  loading: false,
  err: "",
};

export const getGenres = createAsyncThunk("genres/getGenres", async () => {
  try {
    const genres = await genresAPI.getGenres();

    return genres;
  } catch (error) {
    throw error;
  }
});

const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getGenres.pending, (state) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(getGenres.fulfilled, (state, { payload }) => {
      return { ...state, isLoading: false, genres: payload };
    });
    builder.addCase(getGenres.rejected, (state, { error }) => {
      return { ...state, isLoading: true, error: error.message };
    });
  },
});

export default genresSlice.reducer;
