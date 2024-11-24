import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Data } from "../apiCoins";

const initialState: Data[] = [];

const popularCoins = createSlice({
  name: "threepopularcoins",
  initialState,
  reducers: {
    setPopularCoins: (_state, action: PayloadAction<Data[]>) => {
      return (_state = action.payload);
    },
  },
});

export const { setPopularCoins } = popularCoins.actions;
export default popularCoins.reducer;
