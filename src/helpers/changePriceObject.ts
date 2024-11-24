import { Data } from "../redux/apiCoins";

export const changePriceObject = (data: Data) => {
  return {
    ...data,
    vwap24Hr: `${Number(data.vwap24Hr).toFixed(2)}`,
    changePercent24Hr: `${Number(data.changePercent24Hr).toFixed(2)}`,
    marketCapUsd: `${Number(data.marketCapUsd?.slice(0, 2)).toFixed(1)}`,
    priceUsd: `${Number(data.priceUsd).toFixed(2)}`,
    supply: `${Number(data.supply?.slice(0, 3)) / 10}`,
    maxSupply: data.maxSupply
      ? `${Number(data.maxSupply.slice(0, 3)) / 10}`
      : `${20}`,
    volumeUsd24Hr: `${Number(data.volumeUsd24Hr?.slice(0, 3)) / 10}`,
  };
};
