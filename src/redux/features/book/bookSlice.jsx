import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFeatured: false,
  searchValue: "",
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    showFeaturedBooks: (state) => {
      state.isFeatured = true;
    },
    showAllBooks: (state) => {
      state.isFeatured = false;
    },
    addSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});
export default bookSlice.reducer;
export const { showAllBooks, showFeaturedBooks, addSearchValue } =
  bookSlice.actions;
