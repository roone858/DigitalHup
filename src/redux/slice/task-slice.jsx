import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  // const response = await taskService.getTasks();
  // return response;
});

const initialState = {
  data: [{ id: 1, text: "task One", done: false ,status:"Not Started"}],
  isLoading: false,
  error: null,
};
const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.data.push(action.payload);
    },
    deleteTask: (state, action) => {
      return {
        ...state,
        data: state.data.filter((task) => task.id !== action.payload),
      };
    },
    updateTask: (state, action) => {
      const index = state.data.findIndex(
        (task) => task.id == action.payload.id
      );
      if (index !== -1) {
        state.data[index] = action.payload.data;
      }
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchTasks.pending, (state) => {
  //     state.isLoading = true;
  //   });
  //   builder.addCase(fetchTasks.fulfilled, (state, action) => {
  //     return { ...state, data: action.payload, isLoading: false };
  //   });
  //   builder.addCase(fetchTasks.rejected, (state, action) => {
  //     return { ...state, error: action.payload.error };
  //   });
  // },
});

export const { addTask, updateTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
