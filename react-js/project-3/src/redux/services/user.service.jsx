import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../config/axios.config";

export const getUserById = createAsyncThunk(
  "CounterSlice/getUserById",
  async (id) => {
    try {
      let response = await api.get("/users/" + id);
      console.log(response);
      return response.data;
    } catch (error) {
      return Promise.reject({ message: error.message, status: error.status });
    }
  },
);
