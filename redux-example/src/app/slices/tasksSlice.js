import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      {
        id: 1,
        text: "Tarea 1",
      },
    ],
  },
  reducers: {
    addTask: (state, action) => {
      // action : {type: "", payload: {}}
      state.tasks.push(action.payload);
    },
  },
});

export const tasksSliceReducer = tasksSlice.reducer;

export const { addTask } = tasksSlice.actions;
