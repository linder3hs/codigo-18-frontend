import { configureStore } from "@reduxjs/toolkit";
import { counterSliceReducer } from "./slices/counterSlice";
import { userReducer } from "./slices/userSlice";
import { tasksSliceReducer } from "./slices/tasksSlice";
// Este es el store: Es un conjuntos de slices (para poder mostrar la informacion)
// requiero usar el reducer de los slice

// Y que es el reducer? El reducer viene a ser la informacion que queremos que sea
// global y en este caso la definimos dentro de slice como el initialState
export const globalStore = configureStore({
  reducer: {
    counter: counterSliceReducer,
    user: userReducer,
    task: tasksSliceReducer,
  },
});
