import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  count: number;
};

const INITIAL_STATE: InitialState = {
  count: 0,
};

const firstSlice = createSlice({
  name: "Coloque um noma para seu primeiro slice aqui!",
  initialState: INITIAL_STATE,
  reducers: {
    // reducer functions here
    increment(state: InitialState, { payload }: PayloadAction<number>) {
      state.count += payload;
    },
  },
});

export default firstSlice.reducer;
export const { increment } = firstSlice.actions;
