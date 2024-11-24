import { JSX, useState } from "react";
import { HeadTable } from "../HeadTable";
import { CoinData } from "../CoinData";
import { Data } from "../../redux/apiCoins";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  Stack,
  Button,
  Box,
  Typography,
} from "@mui/material";
import styles from "../../styles/SwitchCoins/index.module.css";

type DataSwitch = {
  newData: Data[];
};

export const SwitchCoins = ({ newData }: DataSwitch): JSX.Element => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = newData?.slice(startIndex, endIndex);

  const totalPages = Math.ceil(newData?.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Box className={styles.box}>
      <TableContainer component={Paper}>
        <Table className={styles.table} aria-label="simple table">
          <TableHead>
            <HeadTable />
          </TableHead>
          <TableBody>
            {currentItems?.length ? (
              currentItems.map((coin) => (
                <CoinData key={crypto.randomUUID()} coin={coin} />
              ))
            ) : (
              <Typography variant="h3">No coins</Typography>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Box>
        <Stack className={styles.stack}>
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              className={styles.buttonPagination}
              variant="text"
              key={index}
              onClick={() => handlePageChange(index + 1)}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </Button>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
