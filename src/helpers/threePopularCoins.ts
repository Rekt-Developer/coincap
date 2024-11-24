import { Data } from "../redux/apiCoins";

export const threePopularCoins = (newData: Data[]) => {
  return newData.slice(0, 3);
};
