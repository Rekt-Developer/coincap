import { JSX } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { YourListCoins } from "../YourListCoins";
import {
  Box,
  Modal,
  Typography,
  Button,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MoneyOffCsredOutlinedIcon from "@mui/icons-material/MoneyOffCsredOutlined";
import { ModalOpenClose } from "../AddCoinModal";
import styles from "../../styles/YourBriefCaseModal/index.module.css";

export const YourBriefcaseModal = ({
  open,
  setOpen,
  amounts,
}: ModalOpenClose): JSX.Element => {
  const getYourCoins = useAppSelector((state) => state.listMyCoins);

  const clickBack = () => {
    setOpen(false);
  };

  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={styles.box}>
        <Typography variant="h4">Investment Portfolio</Typography>

        <Button className={styles.closeButton} onClick={() => clickBack()}>
          <CloseIcon />
        </Button>
        <Box className={styles.boxTable}>
          {getYourCoins?.length ? (
            <TableContainer component={Paper}>
              <Table className={styles.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {getYourCoins.map((yourCoin) => (
                    <YourListCoins
                      key={crypto.randomUUID()}
                      yourCoin={yourCoin}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Box className={styles.boxNoCoins}>
              <MoneyOffCsredOutlinedIcon className={styles.noMoneyIcon} />
              <Typography variant="h5">You don't have coins</Typography>
            </Box>
          )}

          <Typography className={styles.total}>Total: {amounts} $</Typography>
        </Box>
      </Box>
    </Modal>
  );
};
