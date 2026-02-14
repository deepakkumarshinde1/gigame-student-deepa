import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./counter.slice";

let store = configureStore({
  reducer: {
    counter: CounterSlice.reducer,
  },
});

export default store;
