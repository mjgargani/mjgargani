import React from "react";
import Button from "../../atoms/Button";
import GridCell from "../../atoms/GridCell";
import GridContainer from "../GridContainer";
import { Container } from "./styles";
import { NavigationProps } from "./types";

const Navigation: React.FC<NavigationProps> = ({ setPage }) => <Container>
  <GridContainer templateColumns={3} columnGap={10}>
    <GridCell>
      <Button onClick={() => setPage(0)}> início</Button>
    </GridCell>
    <GridCell>
      <Button onClick={() => setPage(1)}> projetos</Button>
    </GridCell>
    <GridCell>
      <Button onClick={() => setPage(2)}> sobre</Button>
    </GridCell>
  </GridContainer>
</Container>;

export default Navigation;