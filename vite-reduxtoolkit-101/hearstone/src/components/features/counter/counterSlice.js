import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  isClientTurn: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    openYourTurn: (state) => {
      state.isClientTurn = true;
    },
    closeYourTurn: (state) => {
      state.isClientTurn = false;
    },
    increment: (state) => {
      if (state.value < 10) {
          state.value += 1;
          state.isClientTurn = true;
      }
    },
  },
});

export const { increment, openYourTurn, closeYourTurn } = counterSlice.actions;

export default counterSlice.reducer;
