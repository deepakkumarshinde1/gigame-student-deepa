import { createSlice } from "@reduxjs/toolkit";
import { getUserById } from "./services/user.service";

let CounterSlice = createSlice({
  name: "CounterSlice",
  initialState: {
    count: 11,
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    increment(state, action) {
      state.count += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.pending, (state) => {
        state.isLoading = true;
        state.user = state.error = null;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(getUserById.rejected, (state, action) => {
        console.log(action);
        state.user = null;
        state.isLoading = false;
        console.log(action.error.status);
        state.error = action.error.message;
      });
  },
});

export default CounterSlice;
export const { increment } = CounterSlice.actions;
