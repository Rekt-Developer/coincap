import { JSX, useState, MouseEvent } from "react";
import { Data } from "../../redux/apiCoins";
import { getCoin } from "../../redux/slices/getDetailsCoin";
import { AddCoinModal } from "../AddCoinModal";
import { useAppDispatch } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { TableRow, TableCell, Button } from "@mui/material";
import styles from "../../styles/CoinData/index.module.css";

type Coin = {
  coin: Data;
};

export const CoinData = ({ coin }: Coin): JSX.Element => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleClick = (
    id: string,
    e: MouseEvent<
      HTMLTableRowElement | HTMLTableCellElement,
      globalThis.MouseEvent
    >
  ) => {
    if ((e.target as HTMLElement).tagName === "BUTTON") {
      dispatch(getCoin(id));
      setOpen(true);
    } else {
      dispatch(getCoin(id));
      navigate("/coininformation");
    }
  };

  const {
    id,
    rank,
    symbol,
    name,
    marketCapUsd,
    priceUsd,
    changePercent24Hr,
    vwap24Hr,
  } = coin;

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <AddCoinModal open={open} setOpen={setOpen} />

      <TableRow
        className={styles.hoverRow}
        onClick={(e) => handleClick(id || "", e)}
      >
        <TableCell className={styles.tableCeilStyle}>{rank}</TableCell>
        <TableCell className={styles.tableCeilStyle}>{symbol}</TableCell>
        <TableCell className={styles.tableCeilStyle}>{name}</TableCell>
        <TableCell className={styles.tableCeilStyle}>{vwap24Hr} $</TableCell>
        <TableCell className={styles.tableCeilStyle}>
          {changePercent24Hr} %
        </TableCell>
        <TableCell className={styles.tableCeilStyle}>
          {marketCapUsd} млрд $
        </TableCell>
        <TableCell className={styles.tableCeilStyle}>{priceUsd} $</TableCell>
        <TableCell
          className={styles.tableCeilStyle}
          onClick={(e) => handleClick(id || "", e)}
        >
          <Button variant="contained" className={styles.buttonStyle}>
            BUY
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};
