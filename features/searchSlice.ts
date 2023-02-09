import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IInitialState } from "@/interface";
import Cookies from "js-cookie";

const initialState: IInitialState = {
  search: "",
  is_searching: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    handleSearch: (state: IInitialState, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    handleSearchingState: (
      state: IInitialState,
      action: PayloadAction<boolean>
    ) => {
      state.is_searching = action.payload;
    },
  },
});

export const { handleSearch, handleSearchingState } = searchSlice.actions;

export default searchSlice.reducer;
