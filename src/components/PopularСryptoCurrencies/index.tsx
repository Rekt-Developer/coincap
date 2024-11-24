import { JSX } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { PopularCoin } from "../PopularCoin";
import { Box, Typography } from "@mui/material";
import styles from "../../styles/PopularСryptoCurrencies/index.module.css";

export const PopularСryptoCurrencies = (): JSX.Element => {
  const popularCoins = useAppSelector((state) => state.popularCoins);

  return (
    <Box className={styles.box}>
      <Typography className={styles.popular}>
        Popular cryptocurrencies:
      </Typography>
      <Box className={styles.boxCoin}>
        {popularCoins.map((popularCoin) => (
          <PopularCoin key={crypto.randomUUID()} popularCoin={popularCoin} />
        ))}
      </Box>
    </Box>
  );
};
