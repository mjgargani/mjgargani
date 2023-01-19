import React, { PropsWithChildren } from "react";

import { Container } from "./styles";
import { CardProps } from "./types";
import GridContainer from "../GridContainer";
import GridCell from "../../atoms/GridCell";

const Card: React.FC<PropsWithChildren<CardProps>> = ({
  backgroundColor = "white",
  hoverColor = "whitesmoke",
  bgImg = "",
  children
}) => <Container 
  backgroundColor={backgroundColor} 
  hoverColor={hoverColor}
>
  <GridContainer templateRows={2}>
    <GridCell 
      bgImg={{ 
        source: bgImg,
        size: "cover" 
      }}
      style={{
        // minHeight: 100
      }}
    ></GridCell>
    <GridCell>{children}</GridCell>
  </GridContainer>
</Container>;

export default Card;