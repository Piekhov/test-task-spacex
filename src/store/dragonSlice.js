import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDragons = createAsyncThunk(
  "users/fetchDragons",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "https://api.spacexdata.com/v4/dragons"
      );
      if (!response.ok) {
        throw new Error("Server Error!");
      }
      const data = await response.json();
      return data;
    } catch (error) {}
  }
);

const initialState = {
  dragons: [],
  status: null,
  error: null,
};

export const DragonSlice = createSlice({
  name: "dragons",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.dragons = action.payload;
    },
  },
  extraReducers: {
    [fetchDragons.pending]: (state) => {
      state.status = "loading";
      state.error = null;
      console.log("pending");
    },
    [fetchDragons.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.dragons = action.payload;
      console.log("fulfilled");
    },
    [fetchDragons.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
      console.log("rejected");
    },
  },
});

export const { setValue } = DragonSlice.actions;
export default DragonSlice.reducer;