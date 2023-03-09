import React from "react";
import Button from "../../atoms/Button";
import GridCell from "../../atoms/GridCell";
import GridContainer from "../../atoms/GridContainer";
import { Container } from "./styles";
import { NavigationProps } from "./types";

const Navigation: React.FC<NavigationProps> = ({ page, setPage }) => <Container>
  <GridContainer templateColumns={{desktop: ["repeat(3, 1fr)"]}} columnGap={10}>
    <GridCell>
      <Button active={page === 0} onClick={() => setPage(0)}> início</Button>
    </GridCell>
    <GridCell>
      <Button active={page === 1} onClick={() => setPage(1)}> projetos</Button>
    </GridCell>
    <GridCell>
      <Button active={page === 2} onClick={() => setPage(2)}> sobre</Button>
    </GridCell>
  </GridContainer>
</Container>;

export default Navigation;