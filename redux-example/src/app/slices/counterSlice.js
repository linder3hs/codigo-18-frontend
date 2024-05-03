import { createSlice } from "@reduxjs/toolkit";

// Un slice es un conjuntos de variables y funciones
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 100,
  },
  reducers: {
    increment: (currentState) => {
      currentState.value += 1;
    },
    decrement: (currentState) => {
      currentState.value -= 1;
    },
    setValue: (currentState, action) => {
      console.log(action.payload);
      currentState.value = action.payload.newValue;
    },
  },
});

// Para poder exportar las funciones que estan dentro del slice dentro usar la propiedad actions
// export const incrementReducers = counterSlice.actions.increment;
// export const descrementReducers = counterSlice.actions.decrement;

// Usamos destrucuracion para evitar crear tantas variables
export const { increment, decrement, setValue } = counterSlice.actions;

// Para poder usar esto dentro del store, debo exportarlo como un reducer
export const counterSliceReducer = counterSlice.reducer;
