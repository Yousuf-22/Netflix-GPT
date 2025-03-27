import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./userSlice";
import moviesReducer from "./moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userreducer,
    movies: moviesReducer,
  },
});

export default appStore;
