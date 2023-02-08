import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IInitialState } from "@/interface";

const initialState: IInitialState = {
  search: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    handleSearch: (state: IInitialState, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { handleSearch } = searchSlice.actions;

export default searchSlice.reducer;
