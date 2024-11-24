import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type InitialState = {
  id?: string;
  rank?: string;
  symbol?: string;
  name?: string;
  supply?: string;
  maxSupply?: string;
  marketCapUsd?: string;
  volumeUsd24Hr?: string;
  priceUsd: string;
  changePercent24Hr?: string;
  vwap24Hr?: string;
  explorer?: string;
  quantity: number;
  coinId?: string;
};

const initialState: InitialState[] = [];

const listMyCoins = createSlice({
  name: "listMyCoins",
  initialState,
  reducers: {
    getYourCoin: (state, action: PayloadAction<InitialState>) => {
      state.push(action.payload);
    },
    sellCoin: (state, action: PayloadAction<string>) => {
      return state.filter((userCoins) => userCoins.coinId !== action.payload);
    },
  },
});

export const { getYourCoin, sellCoin } = listMyCoins.actions;
export default listMyCoins.reducer;
