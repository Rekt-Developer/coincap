import { JSX, useEffect } from "react";
import { SwitchCoins } from "../../components/SwitchCoins";
import { useAppDispatch } from "../../hooks/hooks";
import { setPopularCoins } from "../../redux/slices/popularCoins";
import { changePriceArray } from "../../helpers/changePriceArray";
import { threePopularCoins } from "../../helpers/threePopularCoins";
import { Data, useGetCoinsQuery } from "../../redux/apiCoins";
import { Container } from "@mui/material";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import styles from "../../styles/MainPage/index.module.css";

export const MainPage = (): JSX.Element => {
  const { data, error, isLoading } = useGetCoinsQuery();
  const newData: Data[] = changePriceArray(data || []);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPopularCoins(threePopularCoins(newData || [])));
  }, [newData, dispatch]);

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
    <Container maxWidth="lg">
      <SwitchCoins newData={newData || []} />
    </Container>
  );
};
