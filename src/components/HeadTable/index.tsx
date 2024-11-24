import { JSX } from "react";
import { TableRow, TableCell } from "@mui/material";

export const HeadTable = (): JSX.Element => {
  return (
    <TableRow>
      <TableCell>№</TableCell>
      <TableCell></TableCell>
      <TableCell>Name</TableCell>
      <TableCell>VWAP (24HR)</TableCell>
      <TableCell>Change (24HR)</TableCell>
      <TableCell>Market Cap</TableCell>
      <TableCell>Price</TableCell>
      <TableCell></TableCell>
    </TableRow>
  );
};
