import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      // action : {type: "", payload: {}}
      state.tasks.push(action.payload);
    },
  },
});

export const tasksSliceReducer = tasksSlice.reducer;
