import { JSX } from "react";
import { useNavigate } from "react-router-dom";
import { AmountForm } from "../AmountForm";
import { Data, useGetDetailsCoinQuery } from "../../redux/apiCoins";
import { changePriceObject } from "../../helpers/changePriceObject";
import { useAppSelector } from "../../hooks/hooks";
import { Chart } from "../Chart";
import {
  Box,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Link,
  Button,
} from "@mui/material";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import styles from "../../styles/NameCurrency/index.module.css";

export const NameCurrency = (): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const currentId = useAppSelector((state) => state.getDetailsCoin);

  const { data, error, isLoading } = useGetDetailsCoinQuery(currentId);
  const newData: Data = changePriceObject(data || {});

  if (isLoading) {
    return <MonetizationOnOutlinedIcon className={styles.animatIcon} />;
  }

  if (error) {
    if ("status" in error) {
      const errMsg =
        "error" in error ? error.error : JSON.stringify(error.data);

      return (
        <div>
          <div>An error has occurred:</div>
          <div>{errMsg}</div>
        </div>
      );
    }
    return <div>Error: {error.message}</div>;
  }

  return (
    <Box className={styles.box}>
      <Button
        className={styles.buttonBack}
        variant="outlined"
        onClick={() => handleClick()}
      >
        Back
      </Button>

      <Box>
        <Typography variant="h5" className={styles.coinSymbol}>
          {newData?.symbol}{" "}
        </Typography>
        <Typography>{newData?.name} / USD</Typography>
      </Box>

      <Box>
        <Chart />
      </Box>

      <Box className={styles.boxForm}>
        <AmountForm
          setOpen={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </Box>

      <TableContainer component={Paper}>
        <Table className={styles.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Информация</TableCell>
              <TableCell>Данные о валюте</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>Цена</TableCell>
              <TableCell>{newData.priceUsd} $</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Доступное предложение для торговли</TableCell>
              <TableCell>{newData.supply} млн. $</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Общее количество выпущенных активов</TableCell>
              <TableCell>{newData.maxSupply} млн. $</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Объем торгов за последние 24 часа</TableCell>
              <TableCell>{newData.volumeUsd24Hr} млрд. $</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Средняя цена по объёму за последние 24 часа</TableCell>
              <TableCell>{newData.vwap24Hr} $</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Процентное изменения цены за последние 24 часа
              </TableCell>
              <TableCell>{newData.changePercent24Hr} %</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Сайт</TableCell>
              <TableCell>
                <Link
                  href={newData.explorer}
                  underline="none"
                  className={styles.site}
                >
                  {newData.explorer}
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
