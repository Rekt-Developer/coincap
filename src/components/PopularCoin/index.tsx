import { JSX } from "react";
import { Data } from "../../redux/apiCoins";
import { Typography, Box } from "@mui/material";
import styles from "../../styles/PopularCoin/index.module.css";

type PopularCoin = {
  popularCoin: Data;
};

export const PopularCoin = ({ popularCoin }: PopularCoin): JSX.Element => {
  return (
    <Box className={styles.box}>
      <Typography>{popularCoin.name}</Typography>
      <Typography>{popularCoin.priceUsd} $</Typography>
    </Box>
  );
};
