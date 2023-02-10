import React from "react";
import Button from "../../atoms/Button";
import GridCell from "../../atoms/GridCell";
import GridContainer from "../GridContainer";
import { NavigationProps } from "./types";

const Navigation: React.FC<NavigationProps> = ({ setPage }) => <div style={{
  position: "fixed",
  minWidth: "60vw",
  top: "75vh",
  left: "20vw",
  textAlign: "center",
  fontSize: "2vw",
}}>
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
</div>;

export default Navigation;