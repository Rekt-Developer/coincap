import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = string;

const initialState: InitialState = "";

const getQuantityCoins = createSlice({
  name: "getQuantity",
  initialState,
  reducers: {
    getQuantity: (_state, action: PayloadAction<string>) => {
      return (_state = action.payload);
    },
  },
});

export const { getQuantity } = getQuantityCoins.actions;
export default getQuantityCoins.reducer;
