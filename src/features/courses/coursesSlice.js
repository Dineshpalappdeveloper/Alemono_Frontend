import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const response = await axios.get("http://localhost:4000/api/courses");
    return response.data;
  }
);

export const likeCourse = createAsyncThunk("courses/likeCourse", async (id) => {
  const response = await axios.put(
    `http://localhost:4000/api/courses/${id}/like`
  );
  return response.data;
});

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.courses = action.payload;
        state.loading = false;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(likeCourse.fulfilled, (state, action) => {
        const index = state.courses.findIndex(
          (course) => course._id === action.payload._id
        );
        state.courses[index] = action.payload;
      });
  },
});

export default coursesSlice.reducer;
