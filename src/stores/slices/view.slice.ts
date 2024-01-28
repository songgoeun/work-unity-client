import { createSlice } from "@reduxjs/toolkit";

export interface ViewState {
  isLoading: boolean;
}

const initialState: ViewState = {
  isLoading: false,
};

export const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    offLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { showLoading, offLoading } = viewSlice.actions;
export default viewSlice.reducer;
