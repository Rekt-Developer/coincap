import { JSX } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { InitialState, sellCoin } from "../../redux/slices/listMyCoins";
import { TableRow, TableCell, Button } from "@mui/material";
import styles from "../../styles/YourListCoins/index.module.css";

type YourCoin = {
  yourCoin: InitialState;
};

export const YourListCoins = ({ yourCoin }: YourCoin): JSX.Element => {
  const { name, priceUsd, quantity, coinId } = yourCoin;

  const dispatch = useAppDispatch();

  const handleSell = (coinId: string) => {
    dispatch(sellCoin(coinId));
  };

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{priceUsd}</TableCell>
      <TableCell>{quantity}</TableCell>
      <TableCell>{priceUsd}</TableCell>
      <TableCell>
        <Button
          className={styles.buttonSell}
          onClick={() => handleSell(coinId || "")}
          variant="contained"
        >
          SELL
        </Button>
      </TableCell>
    </TableRow>
  );
};
