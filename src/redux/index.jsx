import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./slice/task-slice";


export const store = configureStore({
  reducer: {
    tasks: tasksSlice,
  },
});
