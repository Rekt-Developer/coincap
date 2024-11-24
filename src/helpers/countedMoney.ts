import { InitialState } from "../redux/slices/listMyCoins";

export const countedMoney = (getTotal: InitialState[]) => {
  return getTotal
    .reduce((accum, item) => accum + +item.priceUsd * +item.quantity, 0)
    .toFixed(2);
};
