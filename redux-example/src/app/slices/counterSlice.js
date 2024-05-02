import { createSlice } from "@reduxjs/toolkit";

// Un slice es un conjuntos de variables y funciones
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
});

// Para poder usar esto dentro del store, debo exportarlo como un reducer
export const counterSliceReducer = counterSlice.reducer;
