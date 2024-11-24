import { JSX } from "react";
import { changePriceObject } from "../../helpers/changePriceObject";
import { useGetDetailsCoinQuery } from "../../redux/apiCoins";
import { getYourCoin } from "../../redux/slices/listMyCoins";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Typography, TextField, Alert, Box } from "@mui/material";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/AmountForm/index.module.css";

type Inputs = {
  test: number;
};

type ModalFunc = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AmountForm = ({ setOpen }: ModalFunc): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentId = useAppSelector((state) => state.getDetailsCoin);

  const { data, error, isLoading } = useGetDetailsCoinQuery(currentId);
  const newData = changePriceObject(data || {});

  if (isLoading) {
    return <MonetizationOnOutlinedIcon className={styles.animatTxt} />;
  }

  if (error) {
    if ("status" in error) {
      const errMsg =
        "error" in error ? error.error : JSON.stringify(error.data);

      return (
        <Box>
          <Box>An error has occurred:</Box>
          <Box>{errMsg}</Box>
        </Box>
      );
    }
    return <Box>Error: {error.message}</Box>;
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const newObj = {
      ...newData,
      quantity: data.test,
      coinId: crypto.randomUUID(),
    };
    dispatch(getYourCoin(newObj));
    navigate("/");
    setOpen(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography className={styles.textQuantity}>Enter quantity:</Typography>

      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        placeholder="Введите количество"
        variant="filled"
        size="small"
        className={styles.textField}
        type="text"
        {...register("test", {
          pattern: /^\d+([.]?\d+)?$/,
        })}
      />

      <Button className={styles.buttonBuy} type="submit">
        BUY
      </Button>

      {errors.test && (
        <Alert variant="outlined" severity="warning">
          Введите целое или дробное число через точку
        </Alert>
      )}
    </form>
  );
};
