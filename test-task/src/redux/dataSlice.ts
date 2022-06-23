import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    initialData: data,
    changedValue: data,
  },
  reducers: {
    setFilterData: (state, action) => {
      state.changedValue = action.payload;
    },
    setLoadData: (state, action) => {
      state.initialData = action.payload;
    },
  },
});

export const { setFilterData, setLoadData } = dataSlice.actions;

export default dataSlice.reducer;
