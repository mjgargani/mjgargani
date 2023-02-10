import React, { PropsWithChildren } from "react";

import { Container } from "./styles";
import { CardProps } from "./types";
import GridContainer from "../GridContainer";
import GridCell from "../../atoms/GridCell";

const Card: React.FC<PropsWithChildren<CardProps>> = ({
  backgroundColor = "white",
  hoverColor = "whitesmoke",
  bgImg = "",
  url = "",
  children
}) => <Container 
  backgroundColor={backgroundColor} 
  hoverColor={hoverColor}
>
  <a href={url} target="_blank" rel="noreferrer" style={{ 
    color: "black", textDecoration: "none"
  }}>
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
  </a>
</Container>;

export default Card;