import React, { JSX } from "react";
import { AmountForm } from "../AmountForm";
import { useAppSelector } from "../../hooks/hooks";
import { useGetDetailsCoinQuery } from "../../redux/apiCoins";
import { Button, Modal, Typography, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import styles from "../../styles/AddCoinModal/index.module.css";

export type ModalOpenClose = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  amounts?: string;
};

export const AddCoinModal = ({
  open,
  setOpen,
}: ModalOpenClose): JSX.Element => {
  const currentId = useAppSelector((state) => state.getDetailsCoin);

  const clickBack = () => {
    setOpen(false);
  };

  const { data, error, isLoading } = useGetDetailsCoinQuery(currentId);

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
    return <div>Error: {error.message}</div>;
  }

  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={styles.styleBox}>
        <Typography variant="h4">Buy {data?.name}</Typography>

        <Button className={styles.closeButton} onClick={() => clickBack()}>
          <CloseIcon />
        </Button>

        <Box className={styles.boxForm}>
          <AmountForm setOpen={setOpen} />
        </Box>
      </Box>
    </Modal>
  );
};
