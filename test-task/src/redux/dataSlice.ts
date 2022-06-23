import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    initialData: data,
    changedValue: data,
    activeButtonName: "Show All",
  },
  reducers: {
    setFilterData: (state, action) => {
      state.changedValue = action.payload;
    },
    setLoadData: (state, action) => {
      state.initialData = action.payload;
    },
    setActiveButtonName: (state, action) => {
      state.activeButtonName = action.payload;
    },
  },
});

export const { setFilterData, setLoadData, setActiveButtonName } =
  dataSlice.actions;

export default dataSlice.reducer;
