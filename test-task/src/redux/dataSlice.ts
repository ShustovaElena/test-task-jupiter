import { createSlice } from "@reduxjs/toolkit";
import data from "../data";
// import { ICard } from "../types";

// interface dataState {
//   value: ICard[];
// }

// const initialState: dataState = {
//   value: data,
// };

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    value: data,
  },
  reducers: {
    filterData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { filterData } = dataSlice.actions;

export default dataSlice.reducer;
