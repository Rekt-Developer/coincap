import { Data } from "../redux/apiCoins";

export const changePriceArray = (data: Data[]) => {
  return data?.map((item) => {
    return {
      ...item,
      vwap24Hr: `${Number(item.vwap24Hr).toFixed(2)}`,
      changePercent24Hr: `${Number(item.changePercent24Hr).toFixed(2)}`,
      marketCapUsd: `${Number(item.marketCapUsd?.slice(0, 3)) / 10}`,
      priceUsd: `${Number(item.priceUsd).toFixed(2)}`,
      supply: `${Number(item.supply?.slice(0, 3)) / 10}`,
      maxSupply: item.maxSupply
        ? `${Number(item.maxSupply.slice(0, 3)) / 10}`
        : `${20}`,
      volumeUsd24Hr: `${Number(item.volumeUsd24Hr?.slice(0, 3)) / 10}`,
    };
  });
};
