import { configureStore } from "@reduxjs/toolkit"; // instead of configureStore there will be different names can refer from documenentation
import userReducer from "./userSlice";
import postReducer from "./function";

export const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
  },
});

// all the aplications is stored 