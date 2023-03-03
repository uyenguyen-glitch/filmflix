import { configureStore } from "@reduxjs/toolkit";
import spinner from "./slices/spinner";
import genres from "./slices/genres";

const store = configureStore({
  reducer: {
    spinner,
    genres,
  },
});

export default store;
