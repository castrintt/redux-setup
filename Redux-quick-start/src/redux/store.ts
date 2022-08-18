import { configureStore } from "@reduxjs/toolkit";
import firstSlice from "./reducers/firstReducer";

const store = configureStore({
  reducer: {
    // coloque aqui suas funções reducers!
    counter: firstSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
