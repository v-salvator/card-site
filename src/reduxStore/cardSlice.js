import { createSlice } from "@reduxjs/toolkit";
import { CONTENT_TYPE } from "../consts/contentType";

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    isSecHeaderVisible: true,
    contentType: CONTENT_TYPE.ALL,
  },
  extraReducers: {},
  reducers: {
    hideSecHeader: (state) => {
      state.isSecHeaderVisible = false;
    },
    showSecHeader: (state) => {
      state.isSecHeaderVisible = true;
    },
    switchContentType: (state, action) => {
      state.contentType = action.payload.contentType;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  hideSecHeader,
  showSecHeader,
  switchContentType,
} = cardSlice.actions;

export default cardSlice.reducer;
