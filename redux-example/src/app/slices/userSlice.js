import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Linder Anderson",
    lastName: "Hassinger",
  },
});

export const userReducer = userSlice.reducer;
