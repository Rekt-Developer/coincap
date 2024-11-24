import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_KEY}`,
};

export type Data = {
  id?: string;
  rank?: string;
  symbol?: string;
  name?: string;
  supply?: string;
  maxSupply?: string;
  marketCapUsd?: string;
  volumeUsd24Hr?: string;
  priceUsd?: string;
  changePercent24Hr?: string;
  vwap24Hr?: string;
  explorer?: string;
};

export type Coins = {
  data: Data[];
  timestamp?: number;
};

export type Coin = {
  data: Data;
  timestamp?: number;
};

export type DataGraph = {
  priceUsd: string;
  time: number;
  data: string;
};

export type GraphDetails = {
  data: DataGraph[];
  timestamp?: number;
};

export const apiCoins = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_URL}` }),
  endpoints: (builder) => ({
    getCoins: builder.query<Data[], void>({
      query: () => {
        return {
          url: `/assets`,
          method: "GET",
          headers,
        };
      },
      transformResponse: (response: Coins) => response.data,
    }),
    getDetailsCoin: builder.query<Data, string>({
      query: (id) => {
        return {
          url: `/assets/${id}`,
          method: "GET",
          headers,
        };
      },
      transformResponse: (response: Coin) => response.data,
    }),
    getDetailsGraphic: builder.query<DataGraph[], string>({
      query: (id) => {
        return {
          url: `assets/${id}/history?interval=d1`,
          method: "GET",
          headers,
        };
      },
      transformResponse: (response: GraphDetails) => response.data,
    }),
  }),
});

export const {
  useGetCoinsQuery,
  useGetDetailsCoinQuery,
  useGetDetailsGraphicQuery,
} = apiCoins;
