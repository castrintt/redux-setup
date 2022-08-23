import { configureStore } from "@reduxjs/toolkit";
import firstSlice from "./reducers/firstReducer";

const store = configureStore({
  reducer: {
    // place your createSlice functions here!
    counter: firstSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
