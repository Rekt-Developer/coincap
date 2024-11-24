import { JSX } from "react";
import { NameCurrency } from "../../components/NameCurrency";
import Container from "@mui/material/Container";

export const CoinInformation = (): JSX.Element => {
  return (
    <Container maxWidth="md">
      <NameCurrency />
    </Container>
  );
};
